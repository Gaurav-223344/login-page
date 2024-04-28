import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017'
const DB_NAME = 'login'


async function connectDB() {
    await mongoose
      .connect(`${URI}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected");
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
}

export { connectDB }