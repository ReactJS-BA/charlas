var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

const server = {
  host : '0.0.0.0', port : '8080'
}
server.url = 'http://' + server.host + ':' + server.port + '/'

config.entry.main.unshift('webpack/hot/only-dev-server') // "only" prevents reload on syntax errors
config.entry.main.unshift('webpack-dev-server/client?' + server.url) // WebpackDevServer host and port

config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
  historyApiFallback: true
}).listen(server.port, server.host, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Hot server listening @ ' + server.url);
});
