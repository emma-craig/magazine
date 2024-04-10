import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

// EXPRESS SERVER INSTANCE
const app = express();

app.listen(5000, () => {
  console.log('server running on localhost:5000');
});

// MONGOOSE CONNECTION
mongoose
  .connect(
    'mongodb+srv://emmacraigjennens:YkSaJ4XwwDSxnfXk@peppermagazine.m8qt2gm.mongodb.net/pepper_magazine?retryWrites=true&w=majority&appName=PepperMagazine'
  )
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(cors());

const ArticleSchema = new mongoose.Schema({
  _id: ObjectId,
  category: String,
  slug: String,
  title: String,
  text: String,
  fullText: String,
  image: String,
  //  authors: [{type: mongoose.Schema.Types.ObjectId, ref: "Author"}]
});

const ArticleModel = mongoose.model('articles', ArticleSchema, 'article');

//get all articles
app.get('/articles', async (req, res, next) => {
  let arts = await ArticleModel.find({});

  res.json(arts);
});
