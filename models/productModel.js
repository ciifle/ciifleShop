import mongoose from "mongoose";
import ratingSchema from "./ratingModel.js";

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    oldPrice:{type:Number,required:true},
    countInStock:{type:Number,required:true},
    rating:{type:Number,required:true,default:0},
    ratings:[
        ratingSchema
    ]
})

const Products = mongoose.model('products',productSchema);

export default Products;