import { s, ml } from './script.js';

function Cr(A) {
  return (
    String(A || "CD")
      .replace(/[_-]+/g, " ")
      .split(" ")
      .map((L) => L.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "CD"
  );
}

function TopOperativesLeaderboard() {
  const [leaderboard, setLeaderboard] = ml.useState([]);
  const [loading, setLoading] = ml.useState(true);

  ml.useEffect(() => {
    let active = true;
    async function fetchTopOps() {
      try {
        const cached = localStorage.getItem("codex_top_ops");
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 1000 * 60 * 60 * 24) {
            setLeaderboard(data);
            setLoading(false);
            return;
          }
        }
        const memRes = await fetch(`https://api.chess.com/pub/club/${Tf}/members`);
        if (!memRes.ok) return;
        const membersData = await memRes.json();
        const allUsers = [...(membersData.weekly || []), ...(membersData.monthly || []), ...(membersData.all_time || [])].map(u => u.username);
        
        const uniqueUsers = [...new Set(allUsers)];
        
        const results = [];
        for (let i = 0; i < uniqueUsers.length; i += 10) {
          if (!active) return;
          const chunk = uniqueUsers.slice(i, i + 10);
          const chunkRes = await Promise.all(chunk.map(async (user) => {
            try {
              const res = await fetch(`https://api.chess.com/pub/player/${user.toLowerCase()}/stats`);
              if (!res.ok) return null;
              const data = await res.json();
              const rapid = data.chess_rapid?.last?.rating || 0;
              return { username: user, rating: rapid || "N/A" };
            } catch (e) {
              return null;
            }
          }));
          results.push(...chunkRes.filter(Boolean));
        }
        
        const sorted = results.filter(r => r.rating !== "N/A").sort((a, b) => b.rating - a.rating);
        const top4 = sorted.slice(0, 4);
        if (active) {
          setLeaderboard(top4);
          setLoading(false);
          localStorage.setItem("codex_top_ops", JSON.stringify({ data: top4, timestamp: Date.now() }));
        }
      } catch (e) {
        if (active) setLoading(false);
      }
    }
    fetchTopOps();
    return () => { active = false; };
  }, []);

  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Elite Module" }),
              s.jsx("h2", { className: "module-title", children: "Top Operatives Leaderboard" })
            ]
          }),
          s.jsx("span", { className: "badge green", children: "Top 4" })
        ]
      }),
      s.jsx("div", {
        className: "card-list",
        children: loading 
          ? s.jsx("div", { className: "micro text-center py-4 text-slate-400 border border-slate-800/40 rounded-xl bg-slate-950/20", children: "Fetching operative intel..." })
          : leaderboard.map((op, i) => s.jsxs("div", {
              className: "member-card",
              children: [
                s.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "12px" },
                  children: [
                    s.jsx("div", {
                      style: { 
                        color: i === 0 ? "#FFD700" : i === 1 ? "#C0C0C0" : i === 2 ? "#CD7F32" : "#8bb6d1",
                        fontWeight: "bold",
                        width: "24px",
                        textAlign: "center",
                        fontFamily: "Orbitron, sans-serif"
                      },
                      children: `#${i + 1}`
                    }),
                    s.jsx("div", {
                      className: "avatar",
                      children: Cr(op.username),
                    }),
                    s.jsx("a", { 
                      className: "name", 
                      href: `https://www.chess.com/member/${op.username}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { textDecoration: "none" },
                      children: op.username 
                    })
                  ]
                }),
                s.jsxs("div", { 
                  className: "badge blue", 
                  style: { display: "flex", alignItems: "center", gap: "4px" },
                  children: [
                    s.jsx("span", { style: { fontSize: "10px", opacity: 0.7 }, children: "Rapid Rating" }),
                    op.rating 
                  ] 
                })
              ]
            }, op.username))
      })
    ]
  });
}

export default TopOperativesLeaderboard;
