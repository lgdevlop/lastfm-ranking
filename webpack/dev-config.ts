import { Configuration } from 'webpack'

import entry from './entry'
import output from './output'
import plugins from './plugins'
import optimization from './optimization'
import devServer from './dev-server';
import resolve from './resolve'
import module from './module'
import { devtool } from './constants'

const config: Configuration = {
  entry,
  output,
  resolve,
  devtool,
  devServer,
  module,
  plugins,
  optimization,
}

export default config
