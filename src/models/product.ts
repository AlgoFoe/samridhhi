// import mongoose, { Schema, models } from "mongoose";

// const ProductSchema = new Schema({
//     productId: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     seller: {
//         type: Number, //userId
//         required: true
//     },
//     imgUrl: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     sold:{
//         type: Boolean,
//         required: true
//     }
// }, { timestamps: true }); // Enable timestamps

// const Products = models.products || mongoose.model("products", ProductSchema);
// export default Products;