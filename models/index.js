const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

Comments.belongsTo(Post, {
    // foreignKey:
});
Post.hasMany(Comments);

Post.belongsTo(User);

User.hasMany(Post);

Comments.belongsTo(User);

User.hasMany(Comments);

module.exports = { User, Post, Comments };