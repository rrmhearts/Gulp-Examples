require('dotenv').config();

const { series } = require('gulp');
const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}
exports.compile = parallel(javascript, css);

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

function minify(cb) {
    // body omitted
    cb();
  }
  
  
  function transpile(cb) {
    // body omitted
    cb();
  }
  
  function livereload(cb) {
    // body omitted
    cb();
  }

  if (process.env.NODE_ENV === 'production') {
    exports.build = series(transpile, minify);
  } else {
    exports.build = series(transpile, livereload);
  }
  
  exports.default = series(clean, this.compile, this.build);