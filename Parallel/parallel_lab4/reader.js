const spawn = require('child_process').spawn;
const {mkfifoPromise} = require('named-pipe');
const path = './PIPE';

(async () => {
    try {
        await mkfifoPromise(path).catch()
    } catch (e) {
    }

    const tail = spawn('tail', ['-f', path]);

    console.log('Waiting for messages');

    tail.stdout.pipe(process.stdout);
    tail.stderr.pipe(process.stderr);
})();
