import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const server = createServer (app);
const io = new Server (server);

app.set("port" , (process.env.PORT || 8000));

app.get ("/home" , ( req , res) =>{
    return res.json({"hello":"world"})
});

const start = async () => {
        const connectionDB = await mongoose.connect(
            "mongodb://rohitsalunke107_db_user:jZcS9LEnTKDIPxNi@ac-jzxzmay-shard-00-00.cnrmyl8.mongodb.net:27017,ac-jzxzmay-shard-00-01.cnrmyl8.mongodb.net:27017,ac-jzxzmay-shard-00-02.cnrmyl8.mongodb.net:27017/?ssl=true&replicaSet=atlas-za3msr-shard-0&authSource=admin&appName=apnacall"
        );

        console.log("MongoDB Connected:", connectionDB.connection.host);

        server.listen(app.get("port"), () => {
            console.log(`listning...`);
        });

    } 
start();