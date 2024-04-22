import mongoose from "mongoose";

export async function connect(){
    try{
        const connectionString = 'mongodb+srv://ashirvalorantyt:ashirvalorantyt@cluster0.pf6ex.mongodb.net/e&authSource=admin';
        mongoose.connect(connectionString);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log('MongoDB Connected');
        })
    }catch(error){
        console.log('Something went wrong in conneting to Database, Error: ' +error);
    }
}