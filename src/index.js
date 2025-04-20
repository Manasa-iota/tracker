import app from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})

const PORT =process.env.PORT || 8000;

connectDB()
        .then(()=>{
            app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
        })
        .catch((err)=>{
            console.log("MongoDB failed to connect ", err);
        })
