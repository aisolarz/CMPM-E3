const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Builds the whole face and returns the finished SVG element.
function buildFace() {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "Glowing face with mustache");

  //the gradient
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const glow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "radialGradient",
  );
  glow.setAttribute("id", "head-glow");
  glow.setAttribute("cx", "50%");
  glow.setAttribute("cy", "50%");
  glow.setAttribute("r", "50%");

  const glowCenter = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );

  glowCenter.setAttribute("offset", "0%");
  glowCenter.setAttribute("stop-color", "#fff3b0");
  glow.append(glowCenter);

  const glowEdge = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  glowEdge.setAttribute("offset", "100%");
  glowEdge.setAttribute("stop-color", "#f29e4c");
  glow.append(glowEdge);

  defs.append(glow);
  face.append(defs);

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#head-glow)");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
  mouth.setAttribute("x1", "75");
  mouth.setAttribute("y1", "137");
  mouth.setAttribute("x2", "125");
  mouth.setAttribute("y2", "137");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  const mustache = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  mustache.setAttribute(
    "d",
    "M 100 126 C 90 118 76 118 68 128 C 64 133 58 130 60 124 " +
      "M 100 126 C 110 118 124 118 132 128 C 136 133 142 130 140 124",
  );
  mustache.setAttribute("fill", "none");
  mustache.setAttribute("stroke", "#302c29");
  mustache.setAttribute("stroke-width", "5");
  mustache.setAttribute("stroke-linecap", "round");
  face.append(mustache);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
