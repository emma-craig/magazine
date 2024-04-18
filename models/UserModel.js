// Importing necessary modules
const mongoose = require('mongoose');
var crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

//Defining the User Schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
      minLength: 2,
    },
    email: {
      type: String,
      trim: true,
      required: false,
      unique: true,
    },
    encrypted_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);
//Creating a "virtual" field that will take in password and encrypt it
userSchema
  .virtual('password')
  .set((password) => {
    password = password;
    salt = uuidv4();
    encrypted_password = securedPassword(password);
  })
  .get(() => {
    return password;
  });
//Defining some methods associated with user schema
userSchema.method({
  authenticate: function (plainpassword) {
    return this.securedPassword(plainpassword) === this.encrypted_password;
  },

  securedPassword: function (plainpassword) {
    if (!plainpassword) return '';

    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
    } catch (err) {
      return 'Error in hashing the password';
    }
  },
});
//Export the userSchema as User
module.exports = mongoose.model('User', userSchema);
