const fs = require('fs');

const tokens = {
  true: 'boolval',
  false: 'boolval',
  program: 'keyword',
  integer: 'keyword',
  real: 'keyword',
  boolean: 'keyword',
  read: 'keyword',
  write: 'keyword',
  if: 'keyword',
  for: 'keyword',
  by: 'keyword',
  while: 'keyword',
  do: 'keyword',
  '=': 'assign_op',
  '-': 'add_op',
  '+': 'add_op',
  '*': 'mult_op',
  '/': 'mult_op',
  '^': 'pow_op',
  '>': 'rel_op',
  '<': 'rel_op',
  '<=': 'rel_op',
  '>=': 'rel_op',
  '==': 'rel_op',
  '!=': 'rel_op',
  '.': 'dot',
  ' ': 'ws',
  '\n': 'nl',
  '(': 'brackets_op',
  ')': 'brackets_op',
  '{': 'start_block',
  '}': 'end_block',
};
const tableIdentRealInteger = { 2: 'ident', 6: 'real', 9: 'integer' };

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
  [0, 'ws', 0],
  [0, 'nl', 13],
  [0, '+', 14],
  [0, '-', 14],
  [0, '*', 14],
  [0, '/', 14],
  [0, '^', 14],
  [0, '(', 14],
  [0, ')', 14],
  [0, '{', 14],
  [0, '}', 14],
  [0, '!', 8],
  [8, '=', 19],
  [8, 'other', 102],
  [0, '>', 7],
  [0, '<', 7],
  [0, '=', 7],
  [7, '=', 11],
  [7, 'other', 12],
  [0, '|', 15],
  [15, '|', 16],
  [15, 'other', 104],
  [0, '&', 17],
  [17, '&', 18],
  [17, 'other', 103],
  [0, 'other', 101],
];

const states = {
  newLine: [13],
  star: [2, 6, 9, 12],
  error: [101, 102, 103, 104],
  operators: [19, 11, 12, 18, 16, 14],
  double_operators: [19, 11, 18, 16],
  const: [6, 9],
  ident: [2],
  final: [2, 6, 9, 11, 12, 13, 14, 16, 18, 19, 101, 102, 103, 104],
};

const initState = 0; // q0 - стартовий стан

let state = initState,
  line = 1,
  charIndex = 0,
  char = '',
  lexeme = '';

let tableIds = [];
let tableConst = [];
let tableSymbols = [];

function lex() {
  const sourceCode = fs.readFileSync('./input_full.xx').toString();

  while (charIndex < sourceCode.length) {
    char = sourceCode.charAt(charIndex);
    const charClass = getCharClass(char);

    state = nextState(state, charClass);

    if (states.final.includes(state)) {
      processing();
    } else if (state === initState) {
      lexeme = '';
    } else {
      lexeme += char;
    }

    charIndex++;
  }

  return tableSymbols;
}

function processing() {
  if (states.star.includes(state)) {
    charIndex--;
  }

  if (states.newLine.includes(state)) {
    line++;
    state = initState;
  } else if ([...states.const, ...states.ident].includes(state)) {
    const token = getToken(state, lexeme);
    let index;

    if (token !== 'keyword') {
      index = indexIdConst(state, lexeme);
    }

    console.log({ line, lexeme, token, index });
    tableSymbols.push({ line, lexeme, token, index });

    lexeme = '';
    state = initState;
  } else if (states.operators.includes(state)) {
    if (lexeme === '' || states.double_operators.includes(state)) {
      lexeme += char;
    }

    const token = getToken(state, lexeme);

    console.log({ line, lexeme, token });
    tableSymbols.push({ line, lexeme, token });

    lexeme = '';
    state = initState;
  } else if (states.error.includes(state)) {
    console.error(`(${state}) Unknown char "${char}" at line ${line}`);
  }
}

function getToken(state, lexeme) {
  if (tokens[lexeme]) {
    return tokens[lexeme];
  }

  return tableIdentRealInteger[state];
}

function indexIdConst(state, lexeme) {
  if (states.ident.includes(state)) {
    const index = tableIds.indexOf(lexeme);

    if (index !== -1) {
      return index;
    }

    return tableIds.push(lexeme) - 1;
  } else if (states.const.includes(state)) {
    const index = tableConst.indexOf(lexeme);

    if (index !== -1) {
      return index;
    }

    return tableConst.push(lexeme) - 1;
  } else {
    throw new Error('Invalid state');
  }
}

/**
 * @param {number} state
 * @param {string} charClass
 * @returns {number}
 */
function nextState(state, charClass) {
  const stfRow = stf.find(row => row[0] === state && row[1] === charClass);

  if (stfRow === undefined) {
    return nextState(state, 'other');
  }

  return stfRow[2];
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

  if (char === '\n') {
    return 'nl';
  }

  if ('+-!=*/^<>&|(){}'.includes(char)) {
    return char;
  }

  throw new Error('Unknown char "' + char + '" on line ' + line);
}

lex();

console.log({ tableConst });
console.log({ tableIds });
console.log({ tableSymbols });

module.exports = { lex };
