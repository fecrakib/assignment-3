import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

export const createFacilityInToDB  = async (payload:TFacility)=>{
    const result  = await Facility.create(payload);
    return result;
};