const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// just manually fix the heat reactors since they are at the end
css = css.replace(/background: transparent;\s*ellipse at 50% 80%,/g, 'background: radial-gradient(\n    ellipse at 50% 80%,');
css = css.replace(/background: transparent;\s*ellipse at 50% 70%,/g, 'background: radial-gradient(\n    ellipse at 50% 70%,');
css = css.replace(/background: transparent;\s*ellipse at 50% 60%,/g, 'background: radial-gradient(\n    ellipse at 50% 60%,');

// check for other broken transparent;
fs.writeFileSync('style.css', css);
