import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import { createFacilityInToDB, getAllFacilityFromDB, updateFacilityIntoDB } from "./facility.services";
import AppError from "../../errors/AppError";

export const createFacility  = catchAsync(async(req,res)=>{

    const result  = await createFacilityInToDB(req.body);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
 
    message:'Facility create successfully',
    data:result
   })
});

export const getAllFacility  = catchAsync(async(req,res)=>{
    const result  = await getAllFacilityFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Facilities are retrieved successfully',
        data: result,
      });
});

export const updateFacility  = catchAsync(async(req,res)=>{
    const {id}=req.params;
    const result  =await updateFacilityIntoDB(id,req.body);

    if(!result){
        throw new AppError(httpStatus.BAD_REQUEST,'Facility is not found')
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Facility update successfully',
        data: result
      });
});

