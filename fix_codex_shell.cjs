const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/\.codex-shell {\s*--mx: 50%;\s*--my: 18%;\s*--scan-travel: 3000px;\s*isolation: isolate;\s*background: #000;\s*}/, `.codex-shell {
  --mx: 50%;
  --my: 18%;
  --scan-travel: 3000px;
  isolation: isolate;
  background: #000;
  border-radius: 20px;
  border: 1px solid var(--line);
  box-shadow: 0 0 40px #ff3b191a, inset 0 0 60px #ff3b190d;
  width: 360px;
  height: 800px;
  max-height: 90vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 12px;
  backdrop-filter: blur(10px);
}`);

fs.writeFileSync('style.css', css);
