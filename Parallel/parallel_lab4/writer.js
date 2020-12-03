const {appendFileSync} = require('fs');
const {mkfifoPromise} = require('named-pipe');
const path = './PIPE';

(async () => {
    try {
        await mkfifoPromise(path);
    } catch (e) {
    }

    console.log('Waiting for reader');

    appendFileSync(path, `${new Date().toISOString()}: Hello World\n`)

    console.log('sent message');
})();

