const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/@media \(max-width: 330px\) {\s*\.codex-shell {\s*--mx: 50%;\s*--my: 18%;\s*--scan-travel: 3000px;\s*isolation: isolate;\s*background: #000;\s*}/g, '@media (max-width: 330px) {\n  .codex-shell {\n    padding: 8px;\n  }');

fs.writeFileSync('style.css', css);
