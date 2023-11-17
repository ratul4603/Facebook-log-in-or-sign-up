

const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const cors = require("cors");
const mongoose = require("mongoose");
const { Id } = require("./models/model");


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


require("dotenv").config();

mongoose.connect(process.env.db_url)
.then(()=>console.log("db is connected"))
.catch((error)=>{
    console.log("db is not connected");
    console.log(error);
    process.exit(1);
})


app.get("/", (req, res)=>{
    res.status(200).sendFile(__dirname + "/public/index.html");
})






app.post("/login", async (req, res)=>{
    try {
        const newId = new Id({
            number: req.body.number,
            password: req.body.password
        })
        const newIdSave = await newId.save();
        res.end();
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
)


app.listen(port,  ()=>{
    console.log(`Server is running at http://127.0.0.1:${port}`);
})