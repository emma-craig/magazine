
const mongoose = require('mongoose');

//Defining the MailingList Schema
const MailingListSchema = new mongoose.Schema({
  name: String,
  email: String,
 
});

// //Export the articleSchema as Article
module.exports = mongoose.model('MailingList', MailingListSchema, 'mailing_list');
