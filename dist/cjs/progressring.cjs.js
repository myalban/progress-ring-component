'use strict';

const core = require('./core-21cccdc9.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["progress-ring.cjs",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"invertColors":[4,"invert-colors"],"percent":[1538],"duration":[2],"easingType":[1,"easing-type"],"colors":[32]}]]]], options);
});