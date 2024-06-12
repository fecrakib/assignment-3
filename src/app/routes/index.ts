import { Router } from "express";
import path from "path";
import { FacilityRoutes } from "../modules/facility/facility.route";

const router  = Router();

const moduleRouters = [
    {
        path:'/facility',
        route:FacilityRoutes,
    },
];


moduleRouters.forEach((route)=>router.use(route.path,route.route))

export default router;