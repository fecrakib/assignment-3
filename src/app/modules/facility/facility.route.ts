import { Router } from "express";
import { createFacility, getAllFacility, updateFacility } from "./facility.controller";

import { facilityValidationSchema, updateFacilityValidationSchema } from "./facility.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post('/facility',validateRequest(facilityValidationSchema),createFacility)

router.get('/facilities',getAllFacility),


router.put('/:id',updateFacility)

export const FacilityRoutes = router ;