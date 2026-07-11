const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');
const search = css.substring(42221 - 50, 42221 + 50);
console.log(search);
