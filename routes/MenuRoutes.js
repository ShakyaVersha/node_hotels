const express = require('express')
const router = express.Router();
const MenuItem = require("./../models/MenuItem")

router.post('/', async(req,res)=>{
  try{
    const Menudata = req.body;
    const newMenu = new MenuItem(Menudata);
    const response = await newMenu.save()
    console.log("responsed Menudata saved");
    res.status(200).json(response);

  }
  catch(err){
    console.log(err);
    res.status(500).json({ error: "internal server error" });

  }
})

router.get('/', async(req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log(" data fatched");
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({ error: "internal server error" });

  }
})

module.exports=router;