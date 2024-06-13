//get: /api/booking

import { Types } from "mongoose"


//facility-->ref
//date
//startTime
//endTime
//user--ref
//payableAmount
//isBooked:true

export type TBooked={
    facility:Types.ObjectId;
    data:string,
    startTime:string,
    endTime:string,
    user:Types.ObjectId,
    payableAmount:number,
    isBooked:boolean
}