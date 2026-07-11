const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/\.codex-shell {[\s\S]*?}/, match => {
  return match.replace(/overflow: hidden;/, 'overflow-y: auto;\n  overflow-x: hidden;');
});

fs.writeFileSync('style.css', css);
