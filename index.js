var _ = require('lodash'),
<<<<<<< HEAD
  optimizeJs = require('optimize-js'),
  OriginalSource = require('webpack-sources').OriginalSource;
=======
  optimizeJs = require('optimize-js');
>>>>>>> master

function OptimizeJSPlugin() {}

OptimizeJSPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
<<<<<<< HEAD
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
=======
    compilation.plugin('optimize-chunk-assets', function(chunks) {
      _.each(chunks, function(chunk) {
        _.each(chunk.files, function(file) {
          compilation.assets[file] = optimizeJs(compilation.assets[file]);
        });
      });
>>>>>>> master
    });
  });
}

module.exports = OptimizeJSPlugin;
