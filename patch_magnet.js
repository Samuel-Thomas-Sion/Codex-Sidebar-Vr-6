const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const magnetCode = `
function MagnetLine({ containerRef, lineColor, lineWidth, lineHeight, baseAngle }) {
    const lineRef = ml.useRef(null);
    const [rotate, setRotate] = ml.useState(baseAngle);

    ml.useEffect(() => {
        const updateRotation = (e) => {
            if (!lineRef.current || !containerRef.current) return;
            const rect = lineRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;
            const angle = (Math.atan2(distanceY, distanceX) * 180) / Math.PI;
            setRotate(angle + baseAngle);
        };
        window.addEventListener("mousemove", updateRotation);
        return () => window.removeEventListener("mousemove", updateRotation);
    }, [baseAngle, containerRef]);

    return s.jsx("div", {
        ref: lineRef,
        style: {
            width: lineWidth,
            height: lineHeight,
            backgroundColor: lineColor,
            transform: \`rotate(\${rotate}deg)\`,
            transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            borderRadius: '999px',
            willChange: 'transform'
        }
    });
}

function MagnetLines({
    rows = 9,
    columns = 9,
    containerSize = "80vmin",
    lineColor = "#efefef",
    lineWidth = "1vmin",
    lineHeight = "6vmin",
    baseAngle = 0,
    className = "",
    style = {}
}) {
    const containerRef = ml.useRef(null);
    const total = rows * columns;
    const spans = Array.from({ length: total }, (_, i) => i);

    return s.jsx("div", {
        ref: containerRef,
        className: \`relative grid place-items-center \${className}\`,
        style: {
            display: 'grid',
            gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
            gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
            width: containerSize,
            height: containerSize,
            ...style
        },
        children: spans.map((i) => s.jsx(MagnetLine, {
            key: i,
            containerRef: containerRef,
            lineColor: lineColor,
            lineWidth: lineWidth,
            lineHeight: lineHeight,
            baseAngle: baseAngle
        }))
    });
}
`;

code = code.replace("function rm({ onInitialize: A }) {", magnetCode + "function rm({ onInitialize: A }) {");
fs.writeFileSync('script.js', code);
