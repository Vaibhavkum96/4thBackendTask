import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const PostsSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },

    id: {
        type: Number,
        required: true,
    }, 

    title: {
        type: String,
        
    }, 

    body: {
        type: String,
    }


})

export default mongoose.model("posts", PostsSchema);