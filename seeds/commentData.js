// import Comments model
const { Comments } = require("../models");

// data for seeding Comments table
const data = [
  {
    content: "Do you know about Sonic the Hedgehog?",
    user_id: 1,
    post_id: 1,
  },
  {
    content: "Yippeeee!!!",
    user_id: 1,
    post_id: 1,
  },
  {
    content: "Dang that's crazy...",
    user_id: 2,
    post_id: 2,
  },
];

// function to seed the Comments table with the provided data
const seed = () => Comments.bulkCreate(data);

module.exports = seed;
