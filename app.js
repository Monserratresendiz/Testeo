import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumnos.controller.js";

dotenv.config()
mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("Funciona la base de tados")
})
.catch((error)=>{
    console.log("No funciono la base de datos", error)
})

const app=express();
app.use(cors())
app.listen(4001, ()=>{
    console.log("Se escucha correcto, no escucha borroso")
})
test() 