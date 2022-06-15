import express from "express";
import { getadmissiondata,postadmissiondata } from "../controller/admissionapp.js";

const router=express.Router();

router.get("/",getadmissiondata);
router.post("/",postadmissiondata);

export default router;