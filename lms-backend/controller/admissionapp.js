import admissionappModel from "../models/admissionapp.js";

export const getadmissiondata=async(req,res) =>{

     try {
        const newadmissions= await admissionappModel.find();
         res.json(newadmissions);
     } catch (error) {
         console.log("Not found .... ");
     }
};

export const postadmissiondata= async(req,res) =>{

    const fullname=req.body.fullname;
    const cincstudent=req.body.cincstudent;
    const fathername = req.body.fathername;
    const cincfather=req.body.cincfather;
    const paddress=req.body.paddress;
    const maddress=req.body.maddress;
    const country=req.body.country;
    const state = req.body.state;
    const city=req.body.city;
    const zip=req.body.zip;
    const email=req.body.email;
    const password=req.body.password;
    const metricomaks=req.body.metricomaks;
    const interomarks=req.body.interomarks;
    const metricfullmarks=req.body.metricfullmarks;
    const interfullmarks=req.body.interfullmarks;
  
   const newadmission = new admissionappModel({
fullname,cincstudent,fathername,cincfather,paddress,maddress,country,state,city,zip,email,password,metricomaks,interomarks,metricfullmarks,interfullmarks,

   });
   try {
       await newadmission.save(); 
       res.json(newadmission);
   } catch (error) {
       console.log("Not save ... ");
   }

};