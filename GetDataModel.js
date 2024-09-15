import mongoose from "mongoose";

const getDataSchema= new mongoose.Schema({
   url1:String
})

const getDataModel= mongoose.model('getData', getDataSchema)

export default getDataModel; 