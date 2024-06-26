const mongoose = require('mongoose');

require('dotenv').config();


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