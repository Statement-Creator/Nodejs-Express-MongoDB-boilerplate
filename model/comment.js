const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  commentText: {
    type: String,
    required: true
  }
});

const Comment = module.exports = mongoose.model('Comment',CommentSchema);