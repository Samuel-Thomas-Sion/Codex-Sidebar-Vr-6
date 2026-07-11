const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/\.heat-reactor-1 {[\s\S]*?}/, match => match.replace('}', '  display: none;\n}'));
css = css.replace(/\.heat-reactor-2 {[\s\S]*?}/, match => match.replace('}', '  display: none;\n}'));
css = css.replace(/\.heat-reactor-3 {[\s\S]*?}/, match => match.replace('}', '  display: none;\n}'));

fs.writeFileSync('style.css', css);
