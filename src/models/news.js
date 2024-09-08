import mongoose, { Schema, models } from "mongoose";

const NewsSchema = new Schema({
    title:{
        type: String,
        require: true,
        unique: true
    },
    summary:{
        type: String,
        require: true,
        unique: true
    },
    content:{
        type: String,
        require: true,
        unique: true
    },
    imgUrl:{
        type: [String],
        require: true
    }
}, { timestamps: true }); // Enable timestamps

const News = models.news || mongoose.model("news", NewsSchema);
export default News;
