module.exports = {
   entry: "./main.js",
   output: { 
     filename: "./dist/bundle.js"
   },
   module:{
      loaders: [{
         test: /\.js?$/,
         exclude: /node_modules/,
         loader: ['babel'],
         query: {
            presets: ['react', 'es2015']
         }
      }]
 }
}
