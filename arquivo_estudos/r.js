const r = (x, y) => {
  const cx = 50; const cy = 57.7350269;
  const nx = x - cx; const ny = y - cy;
  const cos = -0.5; const sin = 0.8660254038;
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

console.log("P2 (rotated 120):");
P1.forEach(p => {
  const p2 = r(p[0], p[1]);
  console.log(`[${p2[0].toFixed(2)}, ${p2[1].toFixed(2)}]`);
});
