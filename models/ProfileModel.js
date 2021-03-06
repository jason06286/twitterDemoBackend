const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'User ID 未填寫'],
    },
    coverImage: {
      type: String,
      default: 'https://i.imgur.com/Sw9RKyS.jpg',
    },
    description: {
      type: String,
    },
  },
  { versionKey: false },
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
