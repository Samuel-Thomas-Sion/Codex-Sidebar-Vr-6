import { s, ml } from './script.js';

function PuzzleOfTheDay() {
  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Training Module" }),
              s.jsx("h2", { className: "module-title", children: "Puzzle of the Day" })
            ]
          }),
          s.jsx("span", { className: "badge green", children: "Tactics" })
        ]
      }),
      s.jsx("div", {
        style: {
          background: "linear-gradient(135deg, rgba(35, 7, 7, 0.9), rgba(18, 3, 3, 0.9))",
          border: "1px solid rgba(255, 59, 25, 0.3)",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden"
        },
        children: s.jsx("iframe", {
          src: "https://lichess.org/training/frame?theme=brown&bg=dark",
          style: { width: "100%", maxWidth: "400px", aspectRatio: "10/11" },
          allowTransparency: "true",
          frameBorder: "0"
        })
      })
    ]
  });
}

export default PuzzleOfTheDay;
