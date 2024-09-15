import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import getDataModel from './GetDataModel.js'
import getAddressModel from './AddressModel.js'



const app = express()

app.use(cors())

const port= process.env.PORT || 1200
app.use(express.json())
dotenv.config({path:"./.env"})

mongoose.connect(process.env.URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.get('/getdata',(req, res)=>{
    getDataModel.find()
    .then(posts=>res.json(posts))
    .catch(err=>res.json(err))
})

app.get('/getaddress',(req, res)=>{
    getAddressModel.find()
    .then(posts=>res.json(posts))
    .catch(err=>res.json(err))
})



app.listen(port, () => {
    console.log("Server is running" , port);
})