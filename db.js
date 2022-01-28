var mongoose = require('mongoose');
let URL = "mongodb+srv://admin:admin@cluster0.asvkj.mongodb.net/zomato?retryWrites=true&w=majority"
mongoose.connect(URL, {useNewUrlParser:true},(err)=>{
    if(err) {
        console.log(err);
    }else{
        console.log("Successfully Connected to Database");
    }
});

// var mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://admin:admin@cluster0.asvkj.mongodb.net/zomato?retryWrites=true&w=majority")