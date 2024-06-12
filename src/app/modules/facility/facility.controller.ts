import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import { createFacilityInToDB } from "./facility.services";

export const createFacility  = catchAsync(async(req,res)=>{

    const result  = await createFacilityInToDB(req.body);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
 
    message:'Facility create successfully',
    data:result
   })
});