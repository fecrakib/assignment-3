import { Router } from "express";
import { createFacility, deleteFacility, getAllFacility, updateFacility } from "./facility.controller";

import { facilityValidationSchema, updateFacilityValidationSchema } from "./facility.validation";
import validateRequest from "../../middlewares/validateRequest";
import authenticate from "../../middlewares/authenticate";
import checkAdmin from "../../middlewares/checkAdmin";


const router = Router();


router.post('/facility', authenticate, checkAdmin, validateRequest(facilityValidationSchema), createFacility);
router.get('/facilities',getAllFacility),


router.put('/facility/:id',authenticate,checkAdmin,validateRequest(updateFacilityValidationSchema), updateFacility)

router.delete('/facility/:id',authenticate,checkAdmin,deleteFacility)
export const FacilityRoutes = router ;