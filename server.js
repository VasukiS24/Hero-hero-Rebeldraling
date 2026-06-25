const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");


const app = express();


app.use(cors());

app.use(express.urlencoded({extended:true}));

app.use(express.json());


// IMPORTANT IMAGE LINE

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

console.log("Upload path:", path.join(__dirname,"uploads"));


// DATABASE CONNECTION

mongoose.connect("mongodb://127.0.0.1:27017/freefirexipl")

.then(()=>{

console.log("Database Connected");

})

.catch(err=>{

console.log(err);

});




// IMAGE UPLOAD SETTINGS

const storage = multer.diskStorage({

destination:(req,file,cb)=>{

cb(null, path.join(__dirname,"uploads"));

},


filename:(req,file,cb)=>{

cb(null, Date.now()+"-"+file.originalname);

}


});


const upload = multer({storage});





// DATABASE STRUCTURE


const Player = mongoose.model("Player",{


playerName:String,

ffid:String,

level:Number,

screenshot:String


});






// REGISTER PLAYER


app.post("/register",

upload.single("screenshot"),

async(req,res)=>{


const player = new Player({


playerName:req.body.playerName,


ffid:req.body.ffid,


level:req.body.level,


screenshot:req.file.filename


});


await player.save();


res.send("Registration Successful");


});






// GET PLAYERS


app.get("/players", async(req,res)=>{


const data = await Player.find().sort({

level:-1

});


res.json(data);


});







// START SERVER


app.listen(3000,()=>{


console.log("Server running on port 3000");


});

app.delete("/delete/:id", async(req,res)=>{

await Player.findByIdAndDelete(req.params.id);

res.send("Player Deleted");

});