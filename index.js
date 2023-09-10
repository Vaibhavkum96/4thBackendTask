import dotenv from "dotenv";
import mongoose from "mongoose";
import fetch from 'node-fetch';
import posts from "./models/posts.js";




dotenv.config(); //MongoDbConfig

const connect= async() => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDb")
    }
    catch(error){
      throw error 
    }
}

mongoose.connection.on("disconnected" , ()=> {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=> {
    console.log("mongoDB Connected")
})

connect();


const saveDataToDB = async ()=> {
    try{
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await response.json();

         //console.log(data);
         
         
         for(let i=3; i<10; i++)  // In order to query for specific data, we can use filter and reduce func.
         {

             const post = new posts({
                user_id:data[i]['userId'],
                id:data[i]['id'],
                title:data[i]['title'],
                body:data[i]['body'],

             });

             await post.save();

             
         }

         

         
           
    }

    catch(error){
        console.log(error); //for error logging, in case if error occurs.
    }
}

saveDataToDB();

