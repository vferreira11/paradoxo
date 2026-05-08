const r = (x, y) => {
  const cx = 50; const cy = 57.7350269;
  const nx = x - cx; const ny = y - cy;
  const cos = -0.5; const sin = -0.8660254038; // rotate 240 is -120
  return [
    cx + nx * cos - ny * sin,
    cy + nx * sin + ny * cos
  ];
};

const P1 = [
  [0, 86.60254],
  [50, 0],
  [73.09401, 40],
  [50, 40],
  [23.09401, 86.60254]
];

console.log("P3 (rotated 240):");
P1.forEach(p => {
  const p3 = r(p[0], p[1]);
  console.log(`[${p3[0].toFixed(2)}, ${p3[1].toFixed(2)}]`);
});
