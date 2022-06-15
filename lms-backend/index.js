import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import admissionapp from "./routes/admissionapp.js";

const app=express();

const url="mongodb+srv://Faiq:1234@cluster0.uqxcr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() =>console.log("Connected to the DataBase"));


app.listen(5000);


app.use(cors());

app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use('/registrstudent',admissionapp);
app.use('/showregstudent',admissionapp)