const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: ['web'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watchOptions: {
        ignored: /node_modules/
    }
};