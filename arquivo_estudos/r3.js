const r = (x, y) => {
  const cx = 50; const cy = 57.7350269;
  const nx = x - cx; const ny = y - cy;
  const cos = -0.5; const sin = 0.8660254038;
  return [
    cx + nx * cos - ny * sin,
    cy + nx * sin + ny * cos
  ];
};

const Arm1 = [
  [23.09401, 46.60254],
  [50, 0],
  [73.09401, 40],
  [50, 40],
  [34.64101, 66.60254]
];

console.log("Arm 2 (rotated 120):");
Arm1.forEach(p => {
  const p2 = r(p[0], p[1]);
  console.log(`[${p2[0].toFixed(2)}, ${p2[1].toFixed(2)}]`);
});
