import { s, ml } from './script.js';

const milestones = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];
function MemberRoadmap({ currentMembers }) {
  const members = typeof currentMembers === "number" && !isNaN(currentMembers) 
    ? currentMembers 
    : parseInt((String(currentMembers) || "0").replace(/,/g, ""), 10) || 0;

  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Expansion Module" }),
              s.jsx("h2", { className: "module-title", children: "Member Roadmap" })
            ]
          }),
          s.jsx("span", { className: "badge", children: "Goals" })
        ]
      }),
      s.jsx("div", {
        className: "scroll-zone",
        style: {
          background: "linear-gradient(135deg, rgba(35, 7, 7, 0.9), rgba(18, 3, 3, 0.9))",
          border: "1px solid rgba(255, 59, 25, 0.3)",
          borderRadius: "12px",
          padding: "24px 20px 32px 20px",
          display: "block",
          position: "relative"
        },
        children: s.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            minHeight: "max-content",
            padding: "10px 0"
          },
          children: [
            s.jsx("div", {
              style: {
                position: "absolute",
                top: "20px",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                background: "rgba(255, 59, 25, 0.15)",
                zIndex: 1
              }
            }),
            s.jsx("div", {
              style: {
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                background: "#ff3b19",
                boxShadow: "0 0 10px #ff3b19",
                zIndex: 1,
                height: (() => {
                  if (members >= milestones[milestones.length - 1]) return "calc(100% - 40px)";
                  let activeIdx = milestones.findIndex(m => members < m);
                  if (activeIdx === 0) return "0%";
                  const prev = milestones[activeIdx - 1];
                  const next = milestones[activeIdx];
                  const progress = Math.max(0, (members - prev) / (next - prev));
                  const fraction = (activeIdx - 1 + progress) / (milestones.length - 1);
                  return `calc(${fraction * 100}% - ${fraction * 40}px)`;
                })(),
                transition: "height 1s ease-out"
              }
            }),
            ...milestones.map((ms, idx) => {
              const isCompleted = members >= ms;
              const isCurrent = !isCompleted && (idx === 0 || members >= milestones[idx - 1]);
              const color = isCompleted ? "#ff3b19" : isCurrent ? "#ff8566" : "rgba(255, 59, 25, 0.15)";
              const shadow = isCompleted ? "0 0 10px #ff3b19" : isCurrent ? "0 0 20px #ff8566, 0 0 10px #ff3b19" : "none";
              const size = isCurrent ? "14px" : "10px";

              return s.jsxs("div", {
                style: {
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: idx === milestones.length - 1 ? "0" : "40px",
                  width: "100%"
                },
                key: ms,
                children: [
                  s.jsx("div", {
                    style: {
                      width: size,
                      height: size,
                      borderRadius: "50%",
                      background: isCurrent ? "#fff" : color,
                      boxShadow: shadow,
                      transition: "all 0.3s ease",
                      border: isCompleted ? "none" : isCurrent ? "2px solid #ff8566" : "2px solid rgba(255, 59, 25, 0.3)",
                      flexShrink: 0
                    }
                  }),
                  s.jsx("div", {
                    style: {
                      position: "absolute",
                      left: "calc(50% + 20px)",
                      color: isCompleted || isCurrent ? "#e2e8f0" : "rgba(255,255,255,0.4)",
                      fontSize: "13px",
                      fontWeight: isCurrent ? "bold" : "normal",
                      fontFamily: "Orbitron, sans-serif"
                    },
                    children: ms
                  })
                ]
              });
            })
          ]
        })
      })
    ]
  });
}

export default MemberRoadmap;
