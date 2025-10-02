const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/tasks', require('./routes/tasks'));


//db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/primetrade-task')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  const PORT=process.env.PORT||5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));