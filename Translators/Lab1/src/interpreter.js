const { parse } = require('./parser');

function interpreter(path) {
  let { postfixCode, ids, consts } = parse(path);

  let stack = [];

  postfixCode.forEach(({ lexeme, token }) => {
    if (['integer', 'real', 'boolean', 'ident', 'keyword'].includes(token)) {
      stack.push({ lexeme, token });
    } else {
      doIt(lexeme, token);
    }
  });

  function doIt(lexeme, token) {
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

            if (type.lexeme !== leftConst.type) {
              throw new Error(
                `Incompatible type to assign ${leftConst.type} to ${type.lexeme} ${right.lexeme}`,
              );
            }
          } else {
            if (row.type !== leftConst.type) {
              throw new Error(
                `Incompatible type to assign ${leftConst.type} to ${row.type} ${row.lexeme}`,
              );
            }
          }

          row.type = leftConst.type;
          row.value = leftConst.value;
        }

        return row;
      });
    } else if (['add_op', 'mult_op', 'pow_op', 'rel_op', 'bool_op'].includes(token)) {
      const right = stack.pop();
      const left = stack.pop();

      processing_add_mult_op(left, lexeme, right);
    } else if (lexeme === '@' && token === 'unary_minus') {
      const entry = stack.pop();

      const value = -entry.lexeme;
      const lexeme = value.toString();
      const token = entry.token;

      stack.push({ lexeme, token });

      if (consts.findIndex(row => row.lexeme === lexeme) === -1) {
        consts.push({ type: token, value, lexeme });
      }
    }
  }

  function processing_add_mult_op(left, lexeme, right) {
    if (left.token === 'ident') {
      const id = findId(left.lexeme);

      if (id.type === null) {
        throw new Error(
          `Uninitialized variable ${left.lexeme}: ${JSON.stringify(
            left,
          )} ${lexeme} ${JSON.stringify(right)}`,
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
          `Uninitialized variable ${right.lexeme}: ${JSON.stringify(
            left,
          )} ${lexeme} ${JSON.stringify(right)}`,
        );
      }

      right.value = id.value;
      right.token = id.type;
    } else {
      right.value = findConst(right.lexeme).value;
    }

    getValue(left, lexeme, right);
  }

  function getValue(left, lexeme, right) {
    const result = {
      lexeme: null,
      token: null,
      value: null,
    };

    const arithmeticTypes = ['integer', 'real'];
    const isArithmeticOperands =
      arithmeticTypes.includes(left.token) && arithmeticTypes.includes(right.token);
    const isBooleanOperands = left.token === 'boolean' && right.token === 'boolean';

    if (!isArithmeticOperands && !isBooleanOperands) {
      throw new Error(
        `Incompatible types: ${JSON.stringify(left)} ${lexeme} ${JSON.stringify(right)}`,
      );
    }

    if (['+', '-', '*', '^'].includes(lexeme)) {
      if (left.token === 'real' || right.token === 'real') {
        result.token = 'real';
      } else {
        result.token = 'integer';
      }
    } else if (['>', '<', '<=', '>=', '==', '!=', '&&', '||'].includes(lexeme)) {
      result.token = 'boolean';
    } else if (['/'].includes(lexeme)) {
      result.token = 'real';
    }

    if (lexeme === '+') {
      result.value = left.value + right.value;
    } else if (lexeme === '-') {
      result.value = left.value - right.value;
    } else if (lexeme === '*') {
      result.value = left.value * right.value;
    } else if (lexeme === '/') {
      if (right.value === 0) {
        throw new Error(
          `Division by zero: ${JSON.stringify(left)} ${lexeme} ${JSON.stringify(right)}`,
        );
      }

      result.value = left.value / right.value;
    } else if (lexeme === '^') {
      result.value = left.value ** right.value;
    } else if (lexeme === '>') {
      result.value = left.value > right.value;
    } else if (lexeme === '<') {
      result.value = left.value < right.value;
    } else if (lexeme === '>=') {
      result.value = left.value >= right.value;
    } else if (lexeme === '<=') {
      result.value = left.value <= right.value;
    } else if (lexeme === '==') {
      result.value = left.value === right.value;
    } else if (lexeme === '!=') {
      result.value = left.value !== right.value;
    } else if (lexeme === '&&') {
      result.value = left.value && right.value;
    } else if (lexeme === '||') {
      result.value = left.value || right.value;
    } else {
      throw new Error(`Unknown operator "${lexeme}"`);
    }

    result.lexeme = result.value.toString();

    stack.push({ lexeme: result.lexeme, token: result.token });

    if (consts.findIndex(row => row.lexeme === result.lexeme) === -1) {
      consts.push({ type: result.token, value: result.value, lexeme: result.lexeme });
    }
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

  console.log(`Interpretation has ended!`);

  console.log(`Constants:`);
  console.table(consts);
  console.log(`Ids:`);
  console.table(ids);

  return { ids, consts };
}

module.exports = { interpreter };
