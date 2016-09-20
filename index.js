var _ = require('lodash'),
  optimizeJs = require('optimize-js');

function OptimizeJSPlugin() {}

OptimizeJSPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize-chunk-assets', function(chunks) {
      _.each(chunks, function(chunk) {
        _.each(chunk.files, function(file) {
          compilation.assets[file] = optimizeJs(compilation.assets[file]);
        });
      });
    });
  });
}

module.exports = OptimizeJSPlugin;
