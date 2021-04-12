const { parse } = require('./src/parser');

if (parse('./data/test.xx')) {
  console.log('\nSyntax analysis successful');
}
