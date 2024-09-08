import mongoose, { Schema, models } from "mongoose";
import { ProductsSchema } from "./products";
import { ReviewSchema } from "./reviews";

const UserSchema = new Schema({
    userId:{
        type:Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    aadhar: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: [String],
        required: true,
    },
    verified: {
        type: Boolean,
        required: true,
    },
    banned: {
        type: Boolean,
        required: true,
    },
    reported: {
        type: Number,
        required: true,
    },
    orders: {
        type: [ProductsSchema],
        required: true,
    },
    totalSold: {
        type: Number,
        required: true,
    },
    totalBought: {
        type: Number,
        required: true,
    },
    cart: {
        type: [ProductsSchema],
        required: true,
    },
    listedProducts: {
        type: [ProductsSchema],
        required: true,
    },
    reviews: {
        type: [ReviewSchema],
        required: true,
    },
    avgRating: {
        type: Number,
        required: true,
    },
    profileImageUrl: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true }); // Enable timestamps

const Users = models.users || mongoose.model("users", UserSchema);
export default Users;
