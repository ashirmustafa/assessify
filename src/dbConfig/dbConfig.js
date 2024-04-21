import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection
        connection.on('connected', ()=>{
            console.log('MongoDB Connected');
        })
    }catch(error){
        console.log('Something went wrong in conneting to Database, Error: ' +error);
    }
}