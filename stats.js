const fs = require('fs');
const cssstats = require('cssstats');

const css = fs.readFileSync('./dist/b-css.css', 'utf8');
const stats = cssstats(css);

console.log('CSS SIZE', stats.size);
console.log('CSS SIZE GZIPPED', stats.gzipSize);
console.log('CSS RULES', stats.rules.total);
console.log('CSS SELECTORS', stats.selectors.total);
console.log('CSS DECLARATIONS', stats.declarations.total);
