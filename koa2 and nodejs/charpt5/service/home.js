module.exports={
    login: async (name, password) => {
        let data;
        if (name === 'ikcamp' && password === '123') {
            data = `Hello ${name}`;
        } else {
            data = '账号错误'
        }
        return data
    }
}