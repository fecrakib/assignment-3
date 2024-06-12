import { string, z } from "zod";
import { Role } from "./use.constant";

const userValidationSchema  = z.object({
    body:z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(), 
        phone: z.number(),  
        role: z.enum([...Role]as[string,...string[]]),  
        address: z.string()
    })
});