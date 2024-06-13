import { z } from "zod";



export const bookedValidationSchema = z.object({
    body:z.object({
        facility:z.string(),
        data:z.string(),
        startTime:z.string(),
        endTime:z.string(),
        user:z.string(),
        payableAmount:z.number(),
        isBooked:z.boolean()
    })
});