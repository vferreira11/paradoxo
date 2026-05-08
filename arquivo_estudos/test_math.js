const L = 10;
const T = 2; // Thickness

// Bar 1: along X axis
// X from 0 to L
// Y from 0 to T
// Z from 0 to T
// Vertices of Bar 1 (Left face, Top face, Right face... wait, we only need the visible faces).
// Let's just define the 2D projected polygons!

// Let's manually write the 6 vertices of the L-shape in 2D.
// Origin = top center of the hole.
// 2D grid vectors:
// Right-down = ( +sqrt(3)/2, +0.5 )
// Left-down  = ( -sqrt(3)/2, +0.5 )
// Up         = ( 0, -1 )

const s3 = Math.sqrt(3)/2;
const rd = [s3, 0.5];
const ld = [-s3, 0.5];
const up = [0, -1];

const scale = 30; // so L*scale is around 100
// Length of outer arm = 5 units
// Thickness = 1 unit

// Let's trace the "L" shape for the LEFT arm.
// Start at TOP inner corner.
// 1. Move UP by 1 unit (to top outer).
// 2. Move LEFT-DOWN by 5 units (to bottom-left outer).
// 3. Move RIGHT-DOWN by 1 unit.
// 4. Move UP-RIGHT by 4 units.
// 5. Move RIGHT-DOWN by 3 units (wait, no. The L-shape).

// Face A represents the Left face.
const ptsA = [
  [-1, -4],
  [-4, -1],
  [-4,  5],
  [-1,  4],
  [-1,  1],
  [ 2, -2]
];

// Let's just use the exact points from a known good generation:
// A Penrose triangle polygon (L-shape):
const p1 = [0, -4];
const p2 = [-3.464, -2]; // go left-down
const p3 = [-3.464, 4];  // go down
const p4 = [-1.732, 5];  // go right-down (thickness)
const p5 = [-1.732, -1]; // go up
const p6 = [1.732, -3];  // go right-up
// let's test this!

const fs = require('fs');
const svg = `<svg viewBox="-6 -6 12 12" style="width:500px;background:#eee">
  <polygon points="0,-4 -3.464,-2 -3.464,4 -1.732,5 -1.732,1 1.732,-1" fill="red"/>
</svg>`;
fs.writeFileSync('site/iso_poly.html', svg);
