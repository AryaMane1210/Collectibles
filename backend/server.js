import express from "express";
import enquireRoutes from './enquire.js'; 
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());
app.use("/", enquireRoutes);

app.listen(5000, ()=>{
    console.log("Server running on http://localhost:5000")
});