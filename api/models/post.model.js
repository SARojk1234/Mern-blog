import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,

        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
            unique:true,
        },
        image:{
            type:String,
            default:'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww'
        },
        category:{
            type:String,
            default:'uncategorized',
        },
        slug:{
            type:String,
            required: true,
            unique: true,
        },
    },{timestamps:true}
)

const Post = mongoose.model('Post', postSchema);

export default Post;