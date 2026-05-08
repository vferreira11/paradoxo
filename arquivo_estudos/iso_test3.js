function r(pts, angleDeg) {
    const cx = 50, cy = 50;
    const a = angleDeg * Math.PI / 180;
    const cos = Math.cos(a), sin = Math.sin(a);
    return pts.map(p => {
        const nx = p[0] - cx, ny = p[1] - cy;
        return [
            cx + nx * cos - ny * sin,
            cy + nx * sin + ny * cos
        ].map(n => n.toFixed(2)).join(',');
    }).join(' ');
}

// An isometric Penrose triangle consists of 3 L-shapes.
// Let's rely on standard isometric directions.
// Starting from Top (cx, cy - R).
const R = 45;
const T = 15; // thickness

const dx = Math.cos(Math.PI/6);
const dy = Math.sin(Math.PI/6);

// To get the L shape, let's trace Arm 1:
// p1: top outer
const p1 = [50, 50 - R];
// p2: top left outer
const p2 = [50 - R*dx, 50 - R*dy];
// p3: bottom left outer
const p3 = [50 - R*dx, 50 + R*dy];

// Now it turns right (in isometric, it goes down-right, angle 30)
// It goes in by thickness T? 
// Inner hexagon has radius r = R - T.
const r_in = R - T;

// p4: bottom left inner? No, we want an L-shape that overlaps.
// Let's trace it intuitively.
const pts = [
  [50, 10], // Top
  [15.36, 30], // Top-Left
  [15.36, 70], // Bottom-Left
  [32.68, 80], // Bottom-Inner-ish
  [32.68, 40], // Inner Top-Left
  [50, 30] // Inner Top
];

const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="${r(pts, 0)}" fill="red" opacity="0.8" />
  <polygon points="${r(pts, 120)}" fill="green" opacity="0.8" />
  <polygon points="${r(pts, 240)}" fill="blue" opacity="0.8" />
</svg>`;

require('fs').writeFileSync('iso.svg', svg);
console.log("Done");
