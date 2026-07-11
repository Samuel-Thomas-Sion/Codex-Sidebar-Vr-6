const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
console.log(css.indexOf('#02050b'));
