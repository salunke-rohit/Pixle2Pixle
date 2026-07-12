import mongoose from "mongoose";

try {
    await mongoose.connect(
        "mongodb+srv://rohitsalunke107_db_user:jZcS9LEnTKDIPxNi@apnacall.cnrmyl8.mongodb.net/?appName=apnacall"
    );
    console.log("Connected");
} catch (err) {
    console.log(err);
}