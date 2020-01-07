module.exports = {
    login: async (name, password) => {
        let res;
        if (name === 'ikcamp' && password === '123') {
            res = {
                status: 0,
                data: {
                    title: '个人中心',
                    content: '欢迎进入个人中心'
                }
            };
        } else {
            res = {
                status: -1,
                data: {
                    title: '登录失败',
                    content: '请输入正确的账号信息'
                }
            };
        }
        return res
    }
}