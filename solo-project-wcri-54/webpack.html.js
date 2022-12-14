const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: production,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                include: /imgs/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            },

        ]
    },
    // devServer: {
    //      static: {
    //     //    directory: path.join(__dirname),
    //      },
    //      compress: true,
    //      port: 8080,
    //      hot: true,
    //      proxy: {
    //         '/something':{ target: 'http://localhost:8080/',
    //         router: () => 'http://localhost:3000/'}
    //       },
    //   },
    plugins: [new htmlPlugin({
        // might not need the /client/ pathway
        template: './client/index.html'
    })],
}