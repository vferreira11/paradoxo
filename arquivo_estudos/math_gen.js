const fs = require('fs');

const W = 100;
const h = 86.6025; // 100 * sqrt(3) / 2
const T = 22; // thickness

const P1 = "M 50,0 L 0,86.603 L 43.301,86.603 L 65,49.019 L 26.699,49.019 L 50,8.66 Z";

const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(0, 50, 57.735)">
    <path d="${P1}" fill="red" />
  </g>
  <g transform="rotate(120, 50, 57.735)">
    <path d="${P1}" fill="green" />
  </g>
  <g transform="rotate(240, 50, 57.735)">
    <path d="${P1}" fill="blue" />
  </g>
</svg>`;

fs.writeFileSync('site/math_test.html', svg);
console.log("Done");
