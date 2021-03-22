const { lex } = require('./lexer');

function parse(path) {
  const tableOfSymb = lex(path);
  let numRow = 0;
  let identLevel = 0;

  console.table(tableOfSymb);

  function log() {
    console.log.apply(console.log, ['\t'.repeat(identLevel), ...arguments]);
    identLevel++;
  }

  function parseToken(lex, tok) {
    const { line, lexeme, token } = getSymb();

    numRow++;

    if (lex === lexeme && tok === token) {
      // log(`parseToken(): В рядку ${line} токен: ${lexeme} ${token}`);
      // identLevel--;
      return true;
    }

    throw new Error(
      `В рядку ${line} неочікуваний елемент: ${token} ${lexeme}; очікувався: ${tok} ${lex}`,
    );
  }

  function getSymb() {
    if (numRow >= tableOfSymb.length) {
      throw new Error(
        `Неочікуваний кінець програми - в таблиці символів (розбору) немає запису з номером ${numRow}`,
      );
    }

    return tableOfSymb[numRow];
  }

  function parseStatementList() {
    while (parseStatement());
  }

  function parseStatement() {
    if (numRow >= tableOfSymb.length) {
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

    throw new Error(`В рядку ${line} неочікуваний елемент ${token} ${lexeme}`);
  }

  function parseDeclaration() {
    log('parseDeclaration()');

    const { line, lexeme, token } = getSymb();

    const dataTypes = ['integer', 'real', 'boolean'];

    if (token === 'keyword' && dataTypes.includes(lexeme)) {
      numRow++;
    } else {
      throw new Error(
        `В рядку ${line} неочікуваний елемент ${token} ${lexeme}; очікувався keyword ${dataTypes}`,
      );
    }

    parseAssign();

    identLevel--;
  }

  function parseAssign() {
    log('parseAssign()');

    numRow++;

    if (parseToken('=', 'assign_op')) {
      parseExpression();
    }

    identLevel--;
  }

  function parseIf() {
    log('parseIf()');

    const { lexeme, token } = getSymb();

    if (lexeme === 'if' && token === 'keyword') {
      numRow++;

      parseToken('(', 'brackets_op');
      parseBoolExpr();
      parseToken(')', 'brackets_op');
      parseStatementList();
      parseToken('}', 'end_block');
    }

    identLevel--;
  }

  function parseFor() {
    log('parseFor()');

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
    log('parseBoolExpr()');

    if (getSymb().token === 'boolval') {
      numRow++;
      return true;
    }

    parseExpression();

    let { line, lexeme, token } = getSymb();

    if (token === 'rel_op') {
      numRow++;
    } else {
      throw new Error(`В рядку ${line} неочікуваний елемент для BoolExpr: ${token} ${lexeme}`);
    }

    parseExpression();

    if (getSymb().token === 'bool_op') {
      numRow++;
      parseBoolExpr();
    }

    identLevel--;
  }

  function parseInp() {
    log('parseInp()');

    parseToken('read', 'keyword');
    parseToken('(', 'brackets_op');

    const { line, lexeme, token } = getSymb();

    if (token === 'ident') {
      numRow++;
    } else {
      throw new Error(
        `В рядку ${line} неочікуваний елемент для Inp: ${token} ${lexeme}, очікувався: Ident`,
      );
    }

    parseToken(')', 'brackets_op');

    identLevel--;
  }

  function parseOut() {
    log('parseOut()');

    parseToken('write', 'keyword');
    parseToken('(', 'brackets_op');

    const { line, lexeme, token } = getSymb();

    if (token === 'ident') {
      numRow++;
    } else {
      throw new Error(
        `В рядку ${line} неочікуваний елемент для Out: ${token} ${lexeme}, очікувався: Ident`,
      );
    }

    parseToken(')', 'brackets_op');

    identLevel--;
  }

  function parseExpression() {
    log('parseExpression()');

    if (getSymb().token === 'boolval') {
      numRow++;
      identLevel--;
      return;
    }

    if (getSymb().lexeme === '-') {
      numRow++;
    }

    parseFactor();

    while (
      numRow < tableOfSymb.length &&
      ['add_op', 'mult_op', 'pow_op'].includes(getSymb().token)
    ) {
      numRow++;

      parseFactor();
    }

    identLevel--;
  }

  function parseFactor() {
    log('parseFactor()');

    const { line, lexeme, token } = getSymb();

    if (['integer', 'real', 'ident'].includes(token)) {
      numRow++;
      // log(`В рядку ${line}: ${token} ${lexeme}`);
    } else if (lexeme === '(') {
      numRow++;
      parseExpression();
      parseToken(')', 'brackets_op');
    } else {
      throw new Error(`В рядку ${line} неочікуваний елемент для Factor: ${token} ${lexeme}`);
    }

    identLevel--;
  }

  // parseToken('program', 'keyword', '');
  parseStatementList();
  // parseToken('program', 'keyword', '');

  return true;
}

try {
  if (parse('./base.xx')) {
    console.log('\nСинтаксичний аналіз завершено успішно');
  }
} catch (e) {
  console.error(e);
}
