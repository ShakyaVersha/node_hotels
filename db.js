const mongoose = require('mongoose');
//const mongoURL = 'mongodb://localhost:27017/hotel'
require('dotenv').config();
//const mongoURL = 'mongodb+srv://shakyavar03:Varhsa123@cluster0.asybnvd.mongodb.net/'

const mongoURL = process.env.DB_URL
console.log(`Mongo URL: ${mongoURL}`);
mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('connected',()=>{
  console.log("connected to mongodb server!")
})
db.on('error',(err)=>{
  console.log("mongodb connection erroe!",err)
})
db.on('disconnected',()=>{
  console.log("mongodb disconnected")
})

module.exports = db;