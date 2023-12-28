const mongoose=require("mongoose");
const toDoSchema=new mongoose.Schema({
toDo:{
    type:String,
    required:true
},

});
module.exports=mongoose.model("ToDO",toDoSchema);