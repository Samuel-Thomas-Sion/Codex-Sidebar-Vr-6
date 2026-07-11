const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Hide scrollbar in codex-shell
if (!css.includes('.codex-shell::-webkit-scrollbar')) {
  css += `\n.codex-shell::-webkit-scrollbar { display: none; }\n.codex-shell { -ms-overflow-style: none; scrollbar-width: none; }\n`;
}

// Remove height limitations on codex-shell to expand all the stuff
css = css.replace(/height:\s*800px;/g, 'min-height: 800px; height: auto;');
css = css.replace(/max-height:\s*90vh;/g, '');

fs.writeFileSync('style.css', css);
