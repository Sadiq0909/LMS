import express from"express" ; 
import dotenv from "dotenv" ; 
import cookieParser from "cookie-parser";
import cors from "cors" ; 
import connectDB from "./dbConnect.js";

import userRoute from "./routes/user.route.js"
import mediaRoute from "./routes/media.route.js"
import courseRoute from "./routes/course.route.js"
import mediaRoute from "./routes/media.route.js"

dotenv.config({}) ; 

connectDB() ; 
const app = express() ; 
const PORT = process.env.PORT ;

// Default Middlewares
app.use(express.json()) ;
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

// APIs
app.use("/api/v1/user" , userRoute) ;
app.use("/api/v1/course" , courseRoute) ;
<<<<<<< HEAD
app.use("/api/v1/media" , mediaRoute) ;
=======
app.use("api/v1/media" , mediaRoute) ;
>>>>>>> 2.0

app.listen(PORT , ()=>{
    console.log(`Server listining on port ${PORT}`);
    
})