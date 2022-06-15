import mongoose from "mongoose";

const admissionappstructure=mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"please add your full name"]
    },
    // fullname:String,
    cincstudent:String,
    fathername:String,
    cincfather:String,
    paddress:String,
    maddress:String,
    country:String,
    state:String,
    city:String,
    zip:String,
    email:String,
    password:String,
    metricomaks:String,
    interomarks:String,
    metricfullmarks:String,
    interfullmarks:String
});

const admissionappModel=mongoose.model('admissiondata',admissionappstructure);

export default admissionappModel;