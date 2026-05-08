const fs = require('fs');

// Isometric projection points
// Let's use a standard grid where each unit is width: sqrt(3), height: 1
// We can construct it by defining one "L" shaped bar in 3D, and projecting it, or just 2D coordinates.
// A Penrose triangle polygon:
// Bar 1 (Left to Bottom):
// It's a polygon. Let's just define the outer hexagon and inner hole.
/*
  Outer points (clockwise, starting top):
  0: (50, 5)
  1: (90, 28)
  2: (90, 74)
  3: (50, 97)
  4: (10, 74)
  5: (10, 28)

  Inner hole:
  6: (50, 35)
  7: (65, 43.6)
  8: (65, 61)
  9: (50, 69.6)
  10: (35, 61)
  11: (35, 43.6)

  Penrose triangle can be split into 3 faces:
  Face 1 (Top and Right side)
  Face 2 (Left side and Top inner)
  Face 3 (Bottom and ...)
*/

const face1 = "M 50,5 L 90,28 L 90,74 L 75,82.6 L 75,43.6 L 35,20.4 Z"; // Approximate
const face2 = "M 90,74 L 50,97 L 10,74 L 25,65.4 L 65,65.4 L 75,82.6 Z";
const face3 = "M 10,74 L 10,28 L 50,5 L 65,13.6 L 25,36.5 L 25,65.4 Z";

const svg = `<html><body><svg viewBox="0 0 100 100" style="width:500px;height:500px">
  <path d="M 50,10 L 84.6,30 L 84.6,70 L 50,90 L 15.4,70 L 15.4,30 Z" fill="none" stroke="black" />
  
  <!-- face A: Left -->
  <path d="M 50,90 L 15.4,70 L 15.4,30 L 32.72,40 L 32.72,60 L 50,70 L 67.28,60 L 50,50 L 32.72,60 L 32.72,40 Z" fill="#ccc" />

</svg></body></html>`;
fs.writeFileSync('site/iso_test.html', svg);
