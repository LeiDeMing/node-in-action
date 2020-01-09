const path = require('path');
const miRule = require('./mi-rule')

module.exports = (app) => {
    miRule({
        app,
        rules: [{
            folder: path.join(__dirname, '../controller'),
            name: 'controller'
        }]
    })
}