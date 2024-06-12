
import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import { Role } from "./use.constant";


// Create the User schema
const UserSchema= new Schema<TUser>({
   name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    unique:true,
   },
   phone:{
    type:Number,
    required:true,
   },
   role:{
    type:String,
    required:true,
    enum:Role
   },
   address:{
    type:String,
    required:true
   }

},
{
    timestamps:true,
}
)

export const User  = model<TUser>('User',UserSchema);