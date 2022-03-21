const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const Assets = require('./src/assets');

/*
|--------------------------------------------------------------------------
| Module export configuration
|--------------------------------------------------------------------------
|
| By default, webpack will set the entrypoint  entry: ./src/index.js, 
| the path ./dist and the filename as main.js
|
*/
module.exports = {
    // entry: './app.js',
    // output: {
    //     path: __dirname + '/dist',
    //     filename: 'bundle.js'
    // },
    plugins: [
        new CopyPlugin({
            patterns: Assets.map(asset => {
                return {
                    from: path.resolve(__dirname, `./node_modules/${asset}`),
                    to: path.resolve(__dirname, 'libs')
                }
            })
        })
    ]
}