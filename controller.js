import { ErrorHandler } from "./ErrorHandler.js"
import Repository from "./repository.js"
import { logger } from "./winston.js";


export default class Controller{
   constructor(){
    this.userExist=false
    this.repository=new Repository();
   }
   

     async addUser(req,res,next){
        try{
        if(this.userExist){
            return next(new ErrorHandler("user already exists",400))
        }
        let name="Sindhu";
        let email="sindhu@gmail.com"
         await this.repository.addUser(name,email)
         res.status(201).json({message:"user created"})
    }
    catch(err){
      
        return next(err);
    }
    }
}