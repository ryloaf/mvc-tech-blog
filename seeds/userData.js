const { User } = require('../models');

const data = [
    {
        name: 'Rylee',
        password: 'loaf',
    }
];

const seed = () => User.bulkCreate(data);

module.exports = seed;