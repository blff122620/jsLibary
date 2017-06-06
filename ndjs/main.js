process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
let cat = require('cat');
let bao = cat.create("bao");
console.log(bao.head());

console.log(process.argv);