const Sequelize = require('sequelize');
const sequelize = new Sequelize('custom', 'root', 'ZiAixuan1314', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log(11111)
}).catch(err => {
    console.log(err)
})
const Customer = sequelize.define('customer', {
    id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.ENUM(['男', '女']),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    // fullAddress: {
    //     get() {
    //         return '${this.getDataValue("country")}${this.getDataValue("city")}${this.getDataValue("address")}'
    //     }
    // }
})
Customer.sync().then(() => {
    console.log('table done')
});

module.exports = Customer