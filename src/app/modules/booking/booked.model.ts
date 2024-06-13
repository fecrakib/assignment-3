

// export type TBooking={
//     facility:Types.ObjectId;
//     data:string,
//     startTime:string,
//     endTime:string,
//     user:Types.ObjectId,
//     payableAmount:number,
//     isBooked:boolean
// }

import mongoose, { Schema, model } from "mongoose";
import { TBooked } from "./booked.interface";


const bookedSchema  = new mongoose.Schema<TBooked>({
    facility:{
    type:Schema.Types.ObjectId,
    required:true,
    unique:true,
    ref:'Facility'

    },
    data:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    payableAmount:{
        type:Number,
        required:true,
    },
    isBooked:{
        type:Boolean,
        required:true
    }
})


export const Booked  =mongoose.model<TBooked>('Booked',bookedSchema);