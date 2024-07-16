import { User } from "./model.js";


export default class Repository{

    async addUser(name,email){

        try{
     await User.create({name,email})
        }
        catch(err){
      throw err;
        }
    }
}