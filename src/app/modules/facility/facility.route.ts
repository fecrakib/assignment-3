import { Router } from "express";
import { createFacility } from "./facility.controller";

const router = Router();

router.post('/',createFacility)

export const FacilityRoutes = router ;