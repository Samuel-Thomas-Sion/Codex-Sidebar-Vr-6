const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
console.log("Length:", css.length);
let count = 0;
for(let i = 0; i < css.length; i++) {
  if(css[i] === '(') count++;
  if(css[i] === ')') count--;
  if(count < 0) { console.log("Missing opening at", i, css.substring(i-20, i+20)); break; }
}
console.log("Final count:", count);
