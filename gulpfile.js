require('dotenv').config();

const { series, parallel } = require('gulp');
const { src, dest } = require('gulp');

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

  function streamTask() {
    return src('src\\*.js')
      .pipe(dest('output'));
  }
  
  exports.stream = streamTask;