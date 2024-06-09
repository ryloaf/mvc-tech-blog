const { Comments } = require('../models');

const data = [
    {
        content: "Wow you made a comment",
        date_created: "2024-04-04",
        created_by: 1,
        post_id: 1,
    },
    {
        content: "Yippee",
        date_created: "2024-04-06",
        created_by: 1,
        post_id: 1,
    },
    
];

const seed = () => Comments.bulkCreate(data);

module.exports = seed;