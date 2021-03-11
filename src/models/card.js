import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  name: String,
  age: Number,
  distance: String,
  bio: String,
  pics: [String]
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

export default Card;