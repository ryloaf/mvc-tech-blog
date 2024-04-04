const Users = require('./Users');
const Post = require('./Post');
const Comments = require('./Comments');

Comment.belongsTo(Post);
Post.hasMany(Comment);

Post.belongsTo(Users);

Post.hasMany(Comment);
Users.hasMany(Comment);
Users.hasMany(Post);

module.exports = { Users, Post, Comment };