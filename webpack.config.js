const path = require('path');

// node module system
module.exports = {
    mode : 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
        // 동적으로..
    }
}