import { Router } from "express";
import path from "path";
import { FacilityRoutes } from "../modules/facility/facility.route";
import { AuthRouters } from "../modules/auth/auth.route";

const router  = Router();

const moduleRouters = [
    {
        path:'/',
        route:FacilityRoutes,
    },
    {
        path:'/auth',
        route:AuthRouters,
    },
];


moduleRouters.forEach((route)=>router.use(route.path,route.route))

export default router;