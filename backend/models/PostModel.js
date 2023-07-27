const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
    authore: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
