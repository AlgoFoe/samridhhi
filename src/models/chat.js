import mongoose, { Schema, models } from "mongoose";

const MessageSchema = new Schema({
    senderId:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    }
}, { timestamps: true }); // Enable timestamps

const ChatSchema = new Schema({
    chatId:{
        type: String,
        require: true,
        unique: true
    },
    message:{
        type: [MessageSchema],
        required: true
    }
});

const Chats = models.chats || mongoose.model("chats", ChatSchema);
export default Chats;
