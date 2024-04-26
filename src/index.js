import 'dotenv/config'
import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.on("error", (err)=>{
        console.log("Error !! ", err)   
        throw err;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on the port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!", err);
})
