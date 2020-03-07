const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'docs'),
      // publicPath: '',
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'scss')
                  ]
                }
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/assets/index.template.html",
        filename: "./index.html"
      })
    ],
    devServer: {
      contentBase: './docs',
      hot: true,
    },
  };
  return config;
};
