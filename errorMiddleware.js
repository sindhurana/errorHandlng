import { logger } from "./winston.js";

export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message|| "Internal Server Error"
  err.statusCode=err.statusCode||500;

  // console.log(err);

  if(err.code===11000){       
    err.message="duplicate key error"
    err.statusCode=400;
    logger.error(err)
  }

  res.status(err.statusCode).json({
    message:err.message
  })

}

