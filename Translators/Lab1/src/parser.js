const { lex } = require('./lexer');

function parse(path) {
  const { symbols, consts, ids } = lex(path);

  console.table(symbols);
  console.table(ids);
  console.table(consts);

  let numRow = 0;
  let identLevel = 0;
  let postfixCode = [];
  let labels = {};

  function log() {
    console.log.apply(console.log, ['\t'.repeat(identLevel), ...arguments]);
    identLevel++;
  }

  function parseToken(lex, tok, saveToPostfix = false) {
    const { line, lexeme, token } = getSymb();

    numRow++;

    function throwError() {
      throw new Error(`at ${path}:${line} unexpected ${token} ${lexeme}, ${tok} ${lex} expected`);
    }

    if (lex) {
      if (Array.isArray(lex) && !lex.includes(lexeme)) {
        throwError();
      } else if (typeof lex === 'string' && lex !== lexeme) {
        throwError();
      }
    }

    if (tok) {
      if (Array.isArray(tok) && !token.includes(token)) {
        throwError();
      } else if (typeof tok === 'string' && tok !== token) {
        throwError();
      }
    }

    if (saveToPostfix) {
      postfixCode.push({ lexeme, token });
    }

    return { line, lexeme, token };
  }

  function getSymb() {
    if (numRow >= symbols.length) {
      throw new Error('Unexpected end of program');
    }

    return symbols[numRow];
  }

  function createLabel(name = 'm') {
    let lexeme;
    let i = 1;

    do {
      lexeme = name + '_' + i;
      i++;
    } while (labels[lexeme] !== undefined);

    const label = { lexeme, token: 'label' };

    labels[lexeme] = null;

    return label;
  }

  function assignLabel(label) {
    labels[label.lexeme] = postfixCode.length;
  }

  function parseStatementList() {
    while (parseStatement());
  }

  function parseStatement() {
    if (numRow >= symbols.length) {
      return false;
    }

    const { line, lexeme, token } = getSymb();

    if (token === 'ident') {
      parseAssign();
      return true;
    }

    if (token === 'keyword') {
      if (lexeme === 'if') {
        parseIf();
        return true;
      }

      if (lexeme === 'for') {
        parseFor();
        return true;
      }

      if (lexeme === 'read') {
        parseInp();
        return true;
      }

      if (lexeme === 'write') {
        parseOut();
        return true;
      }

      parseDeclaration();
      return true;
    }

    if (lexeme === '}' && token === 'end_block') {
      return false;
    }

    throw new Error(`at ${path}:${line} unexpected ${token} ${lexeme}`);
  }

  function parseDeclaration() {
    log('parseDeclaration():');

    const { token, lexeme } = parseToken(['integer', 'real', 'boolean'], 'keyword');

    postfixCode.push({ lexeme, token });

    const assign = parseAssign();

    identLevel--;

    return assign;
  }

  function parseAssign() {
    log('parseAssign():');

    const { token, lexeme } = parseToken(null, 'ident', true);
    parseToken('=', 'assign_op');
    parseExpression();

    postfixCode.push({ lexeme: '=', token: 'assign_op' });

    identLevel--;

    return { token, lexeme };
  }

  function parseIf() {
    log('parseIf():');

    const endIfLabel = createLabel('@end_if');

    parseToken('if', 'keyword');
    parseToken('(', 'brackets_op');
    parseBoolExpr();
    parseToken(')', 'brackets_op');

    postfixCode.push(endIfLabel);
    postfixCode.push({ lexeme: 'JF', token: 'jf' });

    parseStatementList();
    parseToken('}', 'end_block');

    assignLabel(endIfLabel);
    postfixCode.push(endIfLabel);

    identLevel--;
  }

  function parseFor() {
    log('parseFor():');

    parseToken('for', 'keyword');
    const i = parseDeclaration();
    parseToken('by', 'keyword');

    // Initialize $step variable
    ids.push({ lexeme: '$step', type: null, value: 0 });
    consts.push({ lexeme: '0', type: 'integer', value: 0 });

    const stepLabel = createLabel('@step');
    const targetLabel = createLabel('@target');
    const endForLabel = createLabel('@end_for');

    postfixCode.push(targetLabel);
    postfixCode.push({ lexeme: 'JUMP', token: 'jump' });

    postfixCode.push(stepLabel);
    assignLabel(stepLabel);

    postfixCode.push({ lexeme: '$step', token: 'ident' });
    parseExpression();
    postfixCode.push({ lexeme: '=', token: 'assign_op' });

    postfixCode.push(i);
    postfixCode.push({ lexeme: '$step', token: 'ident' });
    postfixCode.push(i);
    postfixCode.push({ lexeme: '+', token: 'add_op' });
    postfixCode.push({ lexeme: '=', token: 'assign_op' });

    postfixCode.push(targetLabel);
    assignLabel(targetLabel);

    parseToken('while', 'keyword');
    parseBoolExpr();

    postfixCode.push(endForLabel);
    postfixCode.push({ lexeme: 'JF', token: 'jf' });

    parseToken('do', 'keyword');
    parseStatement();

    postfixCode.push(stepLabel);
    postfixCode.push({ lexeme: 'JUMP', token: 'jump' });

    postfixCode.push(endForLabel);
    assignLabel(endForLabel);

    identLevel--;
  }

  function parseBoolExpr() {
    log('parseBoolExpr():');

    if (getSymb().token === 'boolean') {
      const { token, lexeme } = parseToken(null, 'boolean');
      postfixCode.push({ lexeme, token });

      identLevel--;
      return true;
    }

    parseExpression();
    const { token, lexeme } = parseToken(null, 'rel_op');
    parseExpression();

    postfixCode.push({ lexeme, token });

    if (getSymb().token === 'bool_op') {
      const { token, lexeme } = parseToken(null, 'bool_op');

      parseBoolExpr();

      postfixCode.push({ lexeme, token });
    }

    identLevel--;
  }

  function parseInp() {
    log('parseInp():');

    parseToken('read', 'keyword');
    parseToken('(', 'brackets_op');

    const { lexeme, token } = parseToken(null, 'ident');
    postfixCode.push({ lexeme, token });

    parseToken(')', 'brackets_op');

    postfixCode.push({ lexeme: 'READ', token: 'read' });

    identLevel--;
  }

  function parseOut() {
    log('parseOut():');

    parseToken('write', 'keyword');
    parseToken('(', 'brackets_op');

    const { lexeme, token } = parseToken(null, 'ident');
    postfixCode.push({ lexeme, token });

    parseToken(')', 'brackets_op');

    postfixCode.push({ lexeme: 'WRITE', token: 'write' });

    identLevel--;
  }

  function parseExpression() {
    log('parseExpression():');

    // BoolConst => end of expression
    if (getSymb().token === 'boolean') {
      const { token, lexeme } = parseToken(null, 'boolean');
      postfixCode.push({ lexeme, token });

      identLevel--;
      return true;
    }

    // Unary minus
    let isUnaryMinus = false;

    if (getSymb().lexeme === '-') {
      numRow++;
      isUnaryMinus = true;
    }

    parseTerm();

    if (isUnaryMinus) {
      postfixCode.push({ lexeme: '@', token: 'unary_minus' });
    }

    while (numRow < symbols.length) {
      const { lexeme, token } = getSymb();

      if (token !== 'add_op') break;

      numRow++;

      parseTerm();

      postfixCode.push({ lexeme, token });
    }

    identLevel--;
  }

  function parseTerm() {
    log('parseTerm():');

    parseFactor();

    while (numRow < symbols.length) {
      const { lexeme, token } = getSymb();

      if (!['mult_op', 'pow_op'].includes(token)) break;

      numRow++;

      parseFactor();

      postfixCode.push({ lexeme, token });
    }

    identLevel--;
  }

  function parseFactor() {
    log('parseFactor():');

    const { line, lexeme, token } = getSymb();

    if (['integer', 'real', 'ident'].includes(token)) {
      postfixCode.push({ lexeme, token });
      numRow++;
    } else if (lexeme === '(') {
      numRow++;
      parseExpression();
      parseToken(')', 'brackets_op');
    } else {
      throw new Error(`at ${path}:${line} unexpected Factor element: ${token} ${lexeme}`);
    }

    identLevel--;
  }

  parseStatementList();

  return { consts, ids, labels, symbols, postfixCode };
}

module.exports = { parse };
