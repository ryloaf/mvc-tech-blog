const { Post } = require('../models');

const data = [
    {
        title: "First Post",
        content: "Hello!!",
        date_created: "2024-03-23",
        created_by: 1,
    },
    {
        title: "Ateez",
        content: "Ateez has crazy form at Coachella",
        created_by: 2,
    }
];

const seed = () => Post.bulkCreate(data);

module.exports = seed;