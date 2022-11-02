import { Configuration } from 'webpack'

const optimization: Configuration['optimization'] = {
  moduleIds: 'deterministic',
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      }
    }
  }
}

export default optimization