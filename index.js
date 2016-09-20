var _ = require('lodash'),
  optimizeJs = require('optimize-js'),
  OriginalSource = require('webpack-sources').OriginalSource;

function OptimizeJSPlugin() {}

OptimizeJSPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize-chunk-assets', function(chunks, callback) {
      _.each(chunks, function(chunk) {
        _.each(chunk.files, function(file) {
          compilation.assets[file] = new OriginalSource(
            optimizeJs(compilation.assets[file].source()), 
            file
          );
        });
      });

      callback();
    });
  });
}

module.exports = OptimizeJSPlugin;
