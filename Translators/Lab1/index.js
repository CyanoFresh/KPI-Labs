const fs = require('fs');

const tokens = {
  program: 'keyword',
  if: 'keyword',
  for: 'keyword',
  by: 'keyword',
  while: 'keyword',
  '=': 'assign_op',
  '.': 'dot',
  ' ': 'ws',
  '\n': 'nl',
  '\r': 'nl',
  '-': 'add_op',
  '+': 'add_op',
  '*': 'mult_op',
  '/': 'mult_op',
  '(': 'par_op',
  ')': 'par_op',
  '{': 'start_block',
  '}': 'end_block',
};
const tableIdentFloatInt = { 2: 'ident', 6: 'real', 9: 'integer' };

const stf = [
  [0, 'Letter', 1],
  [1, 'Letter', 1],
  [1, 'Digit', 1],
  [1, 'other', 2],
  [0, 'Digit', 4],
  [4, 'Digit', 4],
  [4, 'dot', 5],
  [4, 'other', 9],
  [5, 'Digit', 5],
  [5, 'other', 6],
  [11, '=', 12],
  [11, 'other', 102],
  [0, 'ws', 0],
  [0, 'nl', 13],
  [0, '+', 14],
  [0, '-', 14],
  [0, '*', 14],
  [0, '/', 14],
  [0, '(', 14],
  [0, ')', 14],
  [0, '{', 14],
  [0, '}', 14],
  [0, 'other', 101],
];
const finalStates = [2, 4, 6, 9, 12, 13, 14, 101, 102];
const errorStates = [101, 102];
const initState = 0; // q0 - стартовий стан

let state = initState,
  lineIndex = 0,
  charIndex = 0,
  char = '',
  lexeme = '';

let tableIds = [];
let tableConst = [];
let tableSymbols = [];

function lex() {
  const sourceCode = fs.readFileSync('./input.xx').toString();

  while (charIndex < sourceCode.length - 1) {
    char = sourceCode.charAt(charIndex);
    const charClass = getCharClass(char);

    state = nextState(state, charClass);

    if (finalStates.includes(state)) {
      processing(state, char);
    } else if (state === initState) {
      lexeme = '';
    } else {
      lexeme += char;
    }

    charIndex++;
  }

  console.log('Done');
}

function processing() {
  if (state === 13) {
    // \n
    lineIndex += 1;
    state = initState;
  } else if ([2, 6, 9].includes(state)) {
    // keyword, ident, float, int
    const token = getToken(state, lexeme);

    if (token !== 'keyword') {
      const index = indexIdConst(state, lexeme);
      console.log({ lineIndex, lexeme, token, index });
      tableSymbols.push({ lineIndex, lexeme, token, index });
    } else {
      console.log({ lineIndex, lexeme, token });
      tableSymbols.push({ lineIndex, lexeme, token });
    }

    lexeme = '';
    charIndex--;
    state = initState;
  } else if ([12, 14].includes(state)) {
    lexeme += char;
    const token = getToken(state, lexeme);
    console.log({ lineIndex, lexeme, token });
    tableSymbols.push({ lineIndex, lexeme, token });

    lexeme = '';
    state = initState;
  } else if (errorStates.includes(state)) {
    if (state === 101) {
      console.error(`Unknown char at line ${lineIndex}: ${char}`);
    } else {
      console.error(`Error at line ${lineIndex}: ${char}`);
    }
  }
}

function getToken(state, lexeme) {
  if (tokens[lexeme]) {
    return tokens[lexeme];
  }

  return tableIdentFloatInt[state];
}

function indexIdConst(state, lexeme) {
  lexeme = lexeme.toLowerCase();

  if (state === 2) {
    const index = tableIds.indexOf(lexeme);

    if (index !== -1) {
      return index;
    }

    return tableIds.push(lexeme) - 1;
  } else if (state === 6 || state === 9) {
    const index = tableConst.indexOf(lexeme);

    if (index !== -1) {
      return index;
    }

    return tableConst.push(lexeme) - 1;
  }
}

/**
 * @param {number} state
 * @param {string} charClass
 * @returns {number}
 */
function nextState(state, charClass) {
  let newState = stf.find(row => row[0] === state && row[1] === charClass)?.[2];

  if (newState === undefined) {
    newState = stf.find(row => row[0] === state && row[1] === 'other')?.[2];
  }

  if (newState === undefined) {
    throw new Error('Unknown new state');
  }

  return newState;
}

/**
 * @param {string} char
 * @returns {string}
 */
function getCharClass(char) {
  if (char === '.') {
    return 'dot';
  }

  if ('abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
    return 'Letter';
  }

  if ('0123456789'.includes(char)) {
    return 'Digit';
  }

  if (char === ' ') {
    return 'ws';
  }

  if ('\r\n'.includes(char)) {
    return 'nl';
  }

  if ('+-=*/(){}'.includes(char)) {
    return char;
  }

  throw new Error('Unknown char: ' + char);
}

lex();

console.log({ tableConst });
console.log({ tableIds });
console.log({ tableSymbols });
