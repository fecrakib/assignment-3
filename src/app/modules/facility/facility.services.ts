import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

export const createFacilityInToDB  = async (payload:TFacility)=>{
    const result  = await Facility.create(payload);
    return result;
};

export const getAllFacilityFromDB = async ()=>{
    return await Facility.find();
} 



export const updateFacilityIntoDB = async (id: string, payload: Partial<TFacility>): Promise<TFacility | null> => {
    const result = await Facility.findByIdAndUpdate(id, payload, { new: true });
    return result;
  };

  export const deleteFacilityFromDB = async (id: string) => {
    const result = await Facility.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true } // To return the updated document
    );
    return result;
};  