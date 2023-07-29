const express=require('express')
const cors=require('cors')
const bookingRoutes=require('./Routes/approutes')
const app=express()
app.use(cors())
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false }));
app.use(bookingRoutes.routes)


app.listen(4200,()=>{
    console.log('listening to port 4200')
})