import mongoose from 'mongoose';

import Card from './card';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
};

const models = { Card };

export { connectDb };

export default models;
