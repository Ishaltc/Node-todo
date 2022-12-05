import express, { application } from "express"
import mongoose  from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
//route
import todoRoutes from './routes/todoRoutes.js'

dotenv.config()
const app= express()
app.use(bodyParser.json({limit:"10mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"10mb",extended:true}))




//mongoose
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connection successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));



 //server
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


//routes
app.use('/todo',todoRoutes)
