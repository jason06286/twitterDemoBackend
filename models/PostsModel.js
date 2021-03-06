const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'User ID 未填寫'],
    },
    images: {
      type: [String],
      default: [],
    },
    content: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
      default: [],
    },
    share: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});
postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
  });

  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
