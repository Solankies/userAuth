const express= require('express');
const app= express();
const cor= require("cors");

// require("./db/config");
// const User= require("./db/User");

const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com");

const userschema=new mongoose.Schema({
    first_name: {
        type: String,
        required: "Your firstname is required",
        max: 25,
    },
    last_name: {
        type: String,
        required: "Your lastname is required",
        max: 25,
    },
    email: {
        type: String,
        required: "Your email is required",
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: "Your password is required",
        select: false,
        max: 25,
    },
})

app.use(express.json());
app.use(cor())



app.post("/register",async(req,resp)=>{

    let user= mongoose.model("Users",userschema);

let create= new user(req.body);

const existingUser = await user.findOne({email:req.body.email} );
        if (existingUser)
            return resp.status(400).json({
                status: "failed",
                data: [],
                message: "It seems you already have an account, please log in instead.",
            });

let result=await create.save();
console.log(result);
    
    resp.send(result);


})

app.post("/login",async(req,resp)=>{

    let user= mongoose.model("Users",userschema);
    console.log(req.body.name)

let create= await user.find({email:req.body.email}).select("+password");
console.log(create[0].password);


if(create == req.body.password & create!=null){
    
    resp.send(create);
}else{
    return resp.status(400).json({
        status: "failed",
        data: [create],
        message: "envalid password.",
    });

}

})


app.listen(8080);
