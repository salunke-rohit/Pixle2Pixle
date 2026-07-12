import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoute from "./routes/users.routes.js"

const app = express();
const server = createServer (app);
const io = connectToSocket(server);

app.set("port" , (process.env.PORT || 8000));
app.use(cors ());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb"}));
app.use("/api/v1/users" , userRoute);

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