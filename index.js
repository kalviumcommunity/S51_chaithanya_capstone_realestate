const express= require('express')
const mongoose=require("mongoose")
const dotenv=require('dotenv').config()
const cors=require('cors')
const Authcontrollers=require('./backend/Controllers/Authcontrollers')
const app=express()

mongoose.set('strictQuery' , false);
mongoose.connect(process.env.MONGO_URL , () =>console.log('MongoDB had beenstarted successfully'))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/Auth", Authcontrollers)

app.listen(process.env.PORT , () => console.log("Server has been started successfully") )
