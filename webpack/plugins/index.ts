import { Configuration } from 'webpack'

import HtmlWebpackPlugin from './html-webpack-plugin'
import BundleAnalyzerPlugin from './bundle-analyzer'

const plugins: Configuration['plugins'] = []

const pluginsEnvKey: Record<string, boolean> = {
  PLUGIN_BUNDLE_ANALYZER: false,
  PLUGIN_HTML_WEBPACK: true,
}

type PluginsInstanceTypes = typeof BundleAnalyzerPlugin | typeof HtmlWebpackPlugin

const pluginsInstance: Record<string, PluginsInstanceTypes> = {
  PLUGIN_BUNDLE_ANALYZER: BundleAnalyzerPlugin,
  PLUGIN_HTML_WEBPACK: HtmlWebpackPlugin,
}

function parsePluginFlags() {
  for (const pluginFlag in pluginsEnvKey) {
    if (pluginFlag in process.env || pluginsEnvKey[pluginFlag]) {
      plugins?.push?.(pluginsInstance[pluginFlag])
    }
  }
}

parsePluginFlags()

export default plugins
