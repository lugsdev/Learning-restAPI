import mongoose from 'mongoose';

export const connect = async () => {
  const dbURI = process.env.MONGO_URI;
  try {
    await mongoose.connect(dbURI!);
    console.log('Conectado ao banco de dados');
  } catch (error) {
    console.log(error);
  }
};
