import { s, ml } from './script.js';

function ClosingPlasma({
  themeMode = "auto",
  speed = 1,
  turbulence = 1,
  mouseInfluence = 1,
  grain = 1,
  sparkle = 1,
  vignette = 1,
  opacity = 1,
  interactive = true,
  darkColorA = DARK_A,
  darkColorB = DARK_B,
  darkColorC = DARK_C,
  lightColorA = LIGHT_A,
  lightColorB = LIGHT_B,
  lightColorC = LIGHT_C,
  className,
  children,
  style,
  ...props
}) {
  const containerRef = ml.useRef(null);
  const canvasRef = ml.useRef(null);
  const mouseRef = ml.useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = ml.useRef({ x: 0.5, y: 0.5 });
  const isDarkRef = ml.useRef(1);
  const settings = ml.useMemo(
    () => ({
      speed,
      turbulence,
      mouseInfluence,
      grain,
      sparkle,
      vignette,
      opacity,
      interactive,
      darkColorA,
      darkColorB,
      darkColorC,
      lightColorA,
      lightColorB,
      lightColorC
    }),
    [
      speed,
      turbulence,
      mouseInfluence,
      grain,
      sparkle,
      vignette,
      opacity,
      interactive,
      darkColorA,
      darkColorB,
      darkColorC,
      lightColorA,
      lightColorB,
      lightColorC
    ]
  );
  ml.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) {
      return;
    }
    const handlePointerMove = (event) => {
      if (!settings.interactive) {
        return;
      }
      const rect = container.getBoundingClientRect();
      targetMouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: 1 - (event.clientY - rect.top) / rect.height
      };
    };
    const handlePointerLeave = () => {
      targetMouseRef.current = { x: 0.5, y: 0.5 };
    };
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);
    const gl = canvas.getContext("webgl", { antialias: false, alpha: true });
    if (!gl) {
      return () => {
      io.disconnect();
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) {
        return null;
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertexShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
      return;
    }
    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }
    gl.useProgram(program);
    const position = gl.getAttribLocation(program, "position");
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uIsDark = gl.getUniformLocation(program, "u_isDark");
    const uSpeed = gl.getUniformLocation(program, "u_speed");
    const uTurbulence = gl.getUniformLocation(program, "u_turbulence");
    const uMouseInfluence = gl.getUniformLocation(program, "u_mouseInfluence");
    const uGrain = gl.getUniformLocation(program, "u_grain");
    const uSparkle = gl.getUniformLocation(program, "u_sparkle");
    const uVignette = gl.getUniformLocation(program, "u_vignette");
    const uOpacity = gl.getUniformLocation(program, "u_opacity");
    const uDarkA = gl.getUniformLocation(program, "u_darkA");
    const uDarkB = gl.getUniformLocation(program, "u_darkB");
    const uDarkC = gl.getUniformLocation(program, "u_darkC");
    const uLightA = gl.getUniformLocation(program, "u_lightA");
    const uLightB = gl.getUniformLocation(program, "u_lightB");
    const uLightC = gl.getUniformLocation(program, "u_lightC");
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const darkA = hexToRgb01(settings.darkColorA, DARK_A);
    const darkB = hexToRgb01(settings.darkColorB, DARK_B);
    const darkC = hexToRgb01(settings.darkColorC, DARK_C);
    const lightA = hexToRgb01(settings.lightColorA, LIGHT_A);
    const lightB = hexToRgb01(settings.lightColorB, LIGHT_B);
    const lightC = hexToRgb01(settings.lightColorC, LIGHT_C);
    gl.uniform3f(uDarkA, darkA[0], darkA[1], darkA[2]);
    gl.uniform3f(uDarkB, darkB[0], darkB[1], darkB[2]);
    gl.uniform3f(uDarkC, darkC[0], darkC[1], darkC[2]);
    gl.uniform3f(uLightA, lightA[0], lightA[1], lightA[2]);
    gl.uniform3f(uLightB, lightB[0], lightB[1], lightB[2]);
    gl.uniform3f(uLightC, lightC[0], lightC[1], lightC[2]);
    let rafId = 0;
    const start = performance.now();
    const render = (now) => {
      const elapsed = (now - start) / 1e3;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(uIsDark, isDarkRef.current);
      gl.uniform1f(uSpeed, settings.speed);
      gl.uniform1f(uTurbulence, settings.turbulence);
      gl.uniform1f(uMouseInfluence, settings.mouseInfluence);
      gl.uniform1f(uGrain, settings.grain);
      gl.uniform1f(uSparkle, settings.sparkle);
      gl.uniform1f(uVignette, settings.vignette);
      gl.uniform1f(uOpacity, settings.opacity);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [settings]);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: containerRef,
      className: cn("relative h-full w-full overflow-hidden", className),
      style,
      ...props,
      children: [
        /* @__PURE__ */ s.jsx(
          "canvas",
          {
            ref: canvasRef,
            "aria-hidden": "true",
            className: "absolute inset-0 h-full w-full",
            style: { width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0 }
          }
        ),
        children && /* @__PURE__ */ s.jsx("div", { className: "relative z-10 h-full w-full flex justify-center", style: { position: "relative", zIndex: 10, height: "100%", width: "100%" }, children })
      ]
    }
  );
}

export default ClosingPlasma;
