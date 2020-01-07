const { Op } = require('sequelize');
const Customer = require('./login');

async function getAllCustomers() {
    return Customer.findAndCountAll({
        attributs: ['id', 'name', 'sex'],
        order: [['updateAt', 'DESC']]
    })
}

async function getCustomerById(id) {
    return Customer.findById(id);
}

async function getCustomerByName(name) {
    return Customer.findAll({
        where: {
            name: {
                [Op.like]: '${name}'
            }
        }
    })
}
