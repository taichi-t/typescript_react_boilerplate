import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, './index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    chunkIds: 'named',
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>test</title>
      </head>
      <body>
      <div id="app"></div>
      </body>
      </html>
  `,
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist/'),
    watchContentBase: true,
    inline: true,
  },
};

export default config;
