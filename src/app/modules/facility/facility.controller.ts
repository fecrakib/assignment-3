import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from 'express';

import { createFacilityInToDB, deleteFacilityFromDB, getAllFacilityFromDB, updateFacilityIntoDB } from "./facility.services";
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
        sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: 'Facility not found',
            data:''
          });
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Facility update successfully',
        data: result
      });
});

export const deleteFacility  = catchAsync(async(req,res)=>{
    const {id}=req.params;
    const result  =await deleteFacilityFromDB(id);

    if(!result){
        sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: 'Facility not found',
            data:''
          });
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Facility delete successfully',
        data: result
      });
});

