const path = require('path'),
    fs = require('fs');

module.exports = function (opts) {
    let {
        app,
        rules = []
    } = opts;
    if (!app) throw new Error('the app is necessary!');
    const appKeys = Object.keys(app);
    rules.forEach(item => {
        let {
            folder,
            name
        } = item;
        if (appKeys.includes(name)) {
            throw new Error('the name already exists!');
        }
        let content = {};
        fs.readFileSync(folder).forEach(filename => {
            let extname = path.extname(filename);
            if(extname === '.js'){
                let name = path.basename(filename,extname);
                content[name] = require(path.join(folder,filename));

            }
        });
        app[name] = content;
    })
}