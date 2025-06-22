import express from "express";

router.post('/', async(req,res)=>{
    const {name,type, description, imageUrl, extraImages} = req.body;
    const newItem = new item ({name,type, description, imageUrl, extraImages});
    await newItem.save();
    res.status(201).json({message: "Item added", item: newItem});
});
router.get('/', async (req, res)=>{
    const items=await Item.find();
    res.json(items);
})