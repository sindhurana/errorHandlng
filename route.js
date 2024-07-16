import express from "express";
import Controller from "./controller.js";

export const router=express.Router();
const controller=new Controller();

router.get("/",(req,res,next)=>controller.addUser(req,res,next))