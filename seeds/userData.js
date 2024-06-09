// import the USer model from the models directory
const { User } = require('../models');

// data for seeding the User table
const data = [
    {
        name: 'Rylee',
        password: 'loaf',
    },
    {
        name: 'Christopher',
        password: 'bang',
    },
    {
        name: 'Terry',
        password: 'catdog',
    }
];

// function to seed the User table with the provided data
const seed = () => User.bulkCreate(data);

module.exports = seed;