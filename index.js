const express= require('express')
const mongoose=require("mongoose")
const dotenv=require('dotenv').config()
const cors=require('cors')
const Authcontrollers=require('./backend/Controllers/Authcontrollers')
const Propertycontroller = require('./backend/Controllers/Propertycontrollers')
const Uploadcontroller = require('./backend/Controllers/Uploadcontrollers')
const app=express()

mongoose.set('strictQuery' , false);
mongoose.connect(process.env.MONGO_URL , () =>console.log('MongoDB had beenstarted successfully'))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/Auth", Authcontrollers)
app.use("/Property" , Propertycontroller)
app.use("/Upload" , Uploadcontroller)

app.listen(process.env.PORT , () => console.log("Server has been started successfully") )
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'; // Import i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
