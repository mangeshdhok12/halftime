import mongoose from "mongoose";

const getAddressSchema= new mongoose.Schema({
   title:String,
   address:String,
   latitude: String,
   longitude: String,
   phone:Number
})

const getAddressModel= mongoose.model('getAddress', getAddressSchema)

export default getAddressModel; 