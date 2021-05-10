const prompt = require('prompt-sync')();
const { parse } = require('./parser');

function interpreter(path) {
  let { postfixCode, ids, consts, labels } = parse(path);

  let stack = [];

  let i = 0;

  while (i < postfixCode.length) {
    const { lexeme, token } = postfixCode[i];

    if (['integer', 'real', 'boolean', 'ident', 'keyword', 'label'].includes(token)) {
      stack.push({ lexeme, token });
      i++;
    } else if (['jump', 'jf'].includes(token)) {
      i = processJump(token, i);
    } else {
      process(lexeme, token);
      i++;
    }
  }

  function processJump(token, i) {
    if (token === 'jf') {
      const label = stack.pop();
      const boolExpr = stack.pop();

      if (boolExpr.lexeme === 'false') {
        if (labels[label.lexeme] === undefined) {
          throw new Error(`Cannot find label ${label.lexeme}`);
        }

        return labels[label.lexeme];
      }

      return i + 1;
    } else if (token === 'jump') {
      const label = stack.pop();

      if (labels[label.lexeme] === undefined) {
        throw new Error(`Cannot find label ${label.lexeme}`);
      }

      return labels[label.lexeme];
    }
  }

  function process(lexeme, token) {
    if (lexeme === '=' && token === 'assign_op') {
      const left = stack.pop();
      const right = stack.pop();
      const type = stack.pop();

      ids = ids.map(row => {
        if (row.lexeme === right.lexeme) {
          const leftConst = findConst(left.lexeme);

          const isAssign = row.type === null && row.value === null;

          if (isAssign) {
            if (!type) {
              throw new Error(`Variable ${right.lexeme} assign before declaration`);
            }

            if (type.lexeme !== left.token) {
              throw new Error(
                `Incompatible type to assign ${left.token} to ${type.lexeme} ${right.lexeme}`,
              );
            }
          } else {
            if (row.type !== null && row.type !== left.token) {
              throw new Error(
                `Incompatible type to assign ${left.token} to ${row.type} ${row.lexeme}`,
              );
            }
          }

          row.type = left.token;
          row.value = leftConst.value;
        }

        return row;
      });
    } else if (['add_op', 'mult_op', 'pow_op', 'rel_op', 'bool_op'].includes(token)) {
      const operator = { lexeme, token };
      const right = stack.pop();
      const left = stack.pop();

      processOperator(left, operator, right);
    } else if (lexeme === '@' && token === 'unary_minus') {
      const entry = stack.pop();

      const value = -entry.lexeme;
      const lexeme = value.toString();
      const token = entry.token;

      stack.push({ lexeme, token });

      if (consts.findIndex(row => row.lexeme === lexeme) === -1) {
        consts.push({ type: token, value, lexeme });
      }
    } else if (token === 'write') {
      const { lexeme } = stack.pop();
      const ident = findId(lexeme);

      if (ident.value === null) {
        throw new Error(`Undefined variable ${ident.lexeme} to write`);
      }

      console.log('\t' + ident.lexeme + '=' + ident.value);
    } else if (token === 'read') {
      const { lexeme } = stack.pop();
      const ident = findId(lexeme);

      if (ident.value === null) {
        throw new Error(`Undefined variable ${ident.lexeme} to read to`);
      }

      const input = prompt(`Enter ${ident.lexeme} (${ident.type}): `);

      if (ident.type === 'integer') {
        ident.value = parseInt(input);
      } else if (ident.type === 'real') {
        ident.value = parseFloat(input);
      } else if (ident.type === 'boolean') {
        ident.value = input === 'true' || input === '1';
      }

      if (Number.isNaN(ident.value)) {
        throw new Error(`Invalid input: NaN`);
      }
    }
  }

  function processOperator(left, operator, right) {
    if (left.token === 'ident') {
      const id = findId(left.lexeme);

      if (id.type === null) {
        throw new Error(
          `Uninitialized variable ${left.lexeme}: ${JSON.stringify(left)} ${
            operator.lexeme
          } ${JSON.stringify(right)}`,
        );
      }

      left.value = id.value;
      left.token = id.type;
    } else {
      left.value = findConst(left.lexeme).value;
    }

    if (right.token === 'ident') {
      const id = findId(right.lexeme);

      if (id.type === null) {
        throw new Error(
          `Uninitialized variable ${right.lexeme}: ${JSON.stringify(left)} ${
            operator.lexeme
          } ${JSON.stringify(right)}`,
        );
      }

      right.value = id.value;
      right.token = id.type;
    } else {
      right.value = findConst(right.lexeme).value;
    }

    if (!checkOperandsTypes(left, operator, right)) {
      throw new Error(
        `Incompatible types: ${JSON.stringify(left)} ${operator.lexeme} ${JSON.stringify(right)}`,
      );
    }

    const result = evalOperator(left, operator, right);

    stack.push({ lexeme: result.lexeme, token: result.token });

    if (consts.findIndex(row => row.lexeme === result.lexeme) === -1) {
      consts.push({ type: result.token, value: result.value, lexeme: result.lexeme });
    }
  }

  function checkOperandsTypes(left, operator, right) {
    const arithmeticTypes = ['integer', 'real'];

    const isArithmeticOperands =
      arithmeticTypes.includes(left.token) && arithmeticTypes.includes(right.token);
    const isBooleanOperands = left.token === 'boolean' && right.token === 'boolean';

    return isArithmeticOperands || isBooleanOperands;
  }

  function getOperatorResultType(left, operator, right) {
    if (['+', '-', '*', '^'].includes(operator.lexeme)) {
      if (left.token === 'real' || right.token === 'real') {
        return 'real';
      } else {
        return 'integer';
      }
    } else if (['/'].includes(operator.lexeme)) {
      return 'real';
    } else if (['rel_op', 'bool_op'].includes(operator.token)) {
      return 'boolean';
    }

    throw new Error(`Unknown operator "${operator.lexeme}"`);
  }

  function evalOperator(left, operator, right) {
    let value;

    if (operator.lexeme === '+') {
      value = left.value + right.value;
    } else if (operator.lexeme === '-') {
      value = left.value - right.value;
    } else if (operator.lexeme === '*') {
      value = left.value * right.value;
    } else if (operator.lexeme === '/') {
      if (right.value === 0) {
        throw new Error(
          `Division by zero: ${JSON.stringify(left)} ${operator.lexeme} ${JSON.stringify(right)}`,
        );
      }

      value = left.value / right.value;
    } else if (operator.lexeme === '^') {
      value = left.value ** right.value;
    } else if (operator.lexeme === '>') {
      value = left.value > right.value;
    } else if (operator.lexeme === '<') {
      value = left.value < right.value;
    } else if (operator.lexeme === '>=') {
      value = left.value >= right.value;
    } else if (operator.lexeme === '<=') {
      value = left.value <= right.value;
    } else if (operator.lexeme === '==') {
      value = left.value === right.value;
    } else if (operator.lexeme === '!=') {
      value = left.value !== right.value;
    } else if (operator.lexeme === '&&') {
      value = left.value && right.value;
    } else if (operator.lexeme === '||') {
      value = left.value || right.value;
    } else {
      throw new Error(`Unknown operator "${operator.lexeme}"`);
    }

    const lexeme = value.toString();
    const token = getOperatorResultType(left, operator, right);

    return { lexeme, token, value };
  }

  function findConst(lexeme) {
    const row = consts.find(row => row.lexeme === lexeme);

    if (row === undefined) {
      throw new Error(`Cannot find const by lexeme ${lexeme}`);
    }

    return row;
  }

  function findId(lexeme) {
    const row = ids.find(row => row.lexeme === lexeme);

    if (row === undefined) {
      throw new Error(`Cannot find Id by lexeme ${lexeme}`);
    }

    return row;
  }

  console.log(`\nInterpretation has ended!\n`);

  console.log(`Constants:`);
  console.table(consts);

  console.log(`Ids:`);
  console.table(ids);

  return { ids, consts };
}

module.exports = { interpreter };
