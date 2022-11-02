import { Configuration } from 'webpack'

import entry from './entry'
import output from './output'
import plugins from './plugins'
import optimization from './optimization'
import resolve from './resolve'
import module from './module'

const config: Configuration = {
  entry,
  output,
  resolve,
  module,
  plugins,
  optimization,
}

export default config
