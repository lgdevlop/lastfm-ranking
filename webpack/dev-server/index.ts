import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const devServer: WebpackDevServerConfiguration = {
  historyApiFallback: true,
  port: 8080,
  host: '0.0.0.0',
  hot: true,
  // compress: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
}

export default devServer
