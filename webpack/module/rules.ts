import { RuleSetRule } from 'webpack'

const rules: RuleSetRule[] = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['react'],
        cacheDirectory: true,
      }
    },
  },
  {
    test: /\.s?[ac]ss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
]

export default rules
