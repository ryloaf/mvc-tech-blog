// import the Post model
const { Post } = require('../models');

// data for seeding the Post table
const data = [
    {
        title: "First Post",
        content: "Hello!! This is my first post",
        user_id: 1,
    },
    {
        title: "Ateez",
        content: "Ateez has crazy form at Coachella, I might have to stan.",
        user_id: 1,
    },
    {
        title: "Sonic Symphony",
        content: "I'm attending the Sonic Symphony concert soon. I hope they play 'I Am All of Me'",
        user_id: 1,
    },
    {
        title: "Freddy Fazbear",
        content: "har har har har har",
        user_id: 1,
    }
];

// function to seed the Post tale with the provided data
const seed = () => Post.bulkCreate(data);

module.exports = seed;