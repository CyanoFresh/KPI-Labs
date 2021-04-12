const { parse } = require('./parser');

function interpreter(path) {
  let { postfixCode, ids, consts } = parse(path);

  let stack = [];

  postfixCode.forEach(({ lexeme, token }) => {
    if (['integer', 'real', 'ident'].includes(token)) {
      stack.push({ lexeme, token });
    } else {
      doIt(lexeme, token);
    }
  });

  function doIt(lexeme, token) {
    if (lexeme === '=' && token === 'assign_op') {
      const left = stack.pop();
      const right = stack.pop();

      ids = ids.map(row => {
        if (row.lexeme === right.lexeme) {
          const leftConst = findConst(left.lexeme);

          row.type = leftConst.type;
          row.value = leftConst.value;
        }

        return row;
      });
    } else if (['add_op', 'mult_op', 'pow_op'].includes(token)) {
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
    let result;

    if (left.token !== right.token) {
      throw new Error(
        `Incompatible types: ${JSON.stringify(left)} ${lexeme} ${JSON.stringify(right)}`,
      );
    } else if (lexeme === '+') {
      result = left.value + right.value;
    } else if (lexeme === '-') {
      result = left.value - right.value;
    } else if (lexeme === '*') {
      result = left.value * right.value;
    } else if (lexeme === '/') {
      if (right.value === 0) {
        throw new Error(
          `Division by zero: ${JSON.stringify(left)} ${lexeme} ${JSON.stringify(right)}`,
        );
      }

      result = left.value / right.value;
    } else if (lexeme === '^') {
      result = Math.pow(left.value, right.value);
    }

    stack.push({ lexeme: result.toString(), token: left.token });

    if (consts.findIndex(row => row.lexeme === lexeme) === -1) {
      consts.push({ type: left.token, value: result, lexeme: result.toString() });
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

  console.table(consts);
  console.table(ids);

  return { ids, consts };
}

module.exports = { interpreter };
