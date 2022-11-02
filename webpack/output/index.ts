import path from 'path'
import { Configuration } from 'webpack'

const output: Configuration['output'] = {
  clean: true,
  filename: 'js/[name].[contenthash].js',
  assetModuleFilename: 'assets/[name].[hash][ext][query]',
  path: path.resolve('./', 'dist'),
  publicPath: '/',
}

export default output
