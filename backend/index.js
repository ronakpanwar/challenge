const express = require('express')
const dataRoute = require('./routes/data.routes')
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const  corsOptions  = {
    origin:"http://localhost:3000",
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}
app.use(cors(corsOptions));

app.use('/api/data' , dataRoute)

app.listen(4000 , ()=>{
    console.log("Localhost:4000");
})