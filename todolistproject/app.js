const express =require("express");
const bodyparser = require("body-parser");

const app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongose = require("mongoose");
mongose.connect("mongodb://127.0.0.1:27017/todo").then(() => console.log("databse conected")).catch(err => console.log(err));
const tryschema = new mongose.Schema({
    name:String
});
const item = mongose.model("task",tryschema);
const todo=new item({
    name:"create some videos"
});

const todo2=new item({
    name:"Learn DSA"
});

const todo3=new item({
    name:"Learn MERN stack devlopment"
});

const todo4=new item({
    name:"Read How to fight Manhwa"
});
/*todo2.save();
todo3.save();
todo4.save();*/
app.get("/",function(req,res){
    item.find({},)
 
    .then(foundItems=>{
        res.render("list",{ejes : foundItems});
    })
    .catch(err => {
        console.log(err);
    })
})
app.post("/",function(req,res){
    const itemName =req.body.task;
    const todo4 =new item({
        name:itemName

    });
    todo4.save();
    res.redirect("/");
});
app.post("/delete",function(req,res){
    const checked = req.body.checkbox1;
    item.findByIdAndRemove(checked )
        .then(() =>{
            console.log("deleted");
            res.redirect("/")
        
    })
    .catch(err=>{
        console.log(err);
    })
})
app.listen("3000",function(){
    console.log("server is running");
})
