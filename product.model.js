import mongoose from "mongoose";

const productschema = new mongoose.Schema(
    {
    name:{
     type: String,
     required: true
},
price:{
    type: Number,
    required: true
},
Image: {
    type: String,
    required: true
},
    },{
        timestamps: true

    }

);
const product = mongoose.model('product', productschema);

export default product;