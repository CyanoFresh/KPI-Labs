const { lex } = require('./lexer');

function parse(path) {
  const { symbols, consts, ids } = lex(path);

  console.table(symbols);
  console.table(ids);
  console.table(consts);

  let numRow = 0;
  let identLevel = 0;
  let postfixCode = [];

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

    parseToken(['integer', 'real', 'boolean'], 'keyword');
    parseAssign();

    identLevel--;
  }

  function parseAssign() {
    log('parseAssign():');

    parseToken(null, 'ident', true);
    parseToken('=', 'assign_op');
    parseExpression();

    postfixCode.push({ lexeme: '=', token: 'assign_op' });

    identLevel--;
  }

  function parseIf() {
    log('parseIf():');

    parseToken('if', 'keyword');
    parseToken('(', 'brackets_op');
    parseBoolExpr();
    parseToken(')', 'brackets_op');
    parseStatementList();
    parseToken('}', 'end_block');

    identLevel--;
  }

  function parseFor() {
    log('parseFor():');

    parseToken('for', 'keyword');
    parseDeclaration();
    parseToken('by', 'keyword');
    parseExpression();
    parseToken('while', 'keyword');
    parseBoolExpr();
    parseToken('do', 'keyword');
    parseStatement();

    identLevel--;
  }

  function parseBoolExpr() {
    log('parseBoolExpr():');

    if (getSymb().token === 'boolval') {
      numRow++;
      identLevel--;
      return true;
    }

    parseExpression();
    parseToken(null, 'rel_op');
    parseExpression();

    if (getSymb().token === 'bool_op') {
      numRow++;
      parseBoolExpr();
    }

    identLevel--;
  }

  function parseInp() {
    log('parseInp():');

    parseToken('read', 'keyword');
    parseToken('(', 'brackets_op');
    parseToken(null, 'ident');
    parseToken(')', 'brackets_op');

    identLevel--;
  }

  function parseOut() {
    log('parseOut():');

    parseToken('write', 'keyword');
    parseToken('(', 'brackets_op');
    parseToken(null, 'ident');
    parseToken(')', 'brackets_op');

    identLevel--;
  }

  function parseExpression() {
    log('parseExpression():');

    // BoolConst => end
    if (getSymb().token === 'boolval') {
      numRow++;
      identLevel--;
      return;
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

  console.table(postfixCode);
  console.log(postfixCode.map(row => row.lexeme).join(' '));

  return { consts, ids, symbols, postfixCode };
}

module.exports = { parse };
