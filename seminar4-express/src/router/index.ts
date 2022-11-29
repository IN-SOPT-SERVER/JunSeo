import { Router } from "express";
import rateRouter from "./rateRouter";

const router: Router = Router();

router.use("/rate", rateRouter);

export default router;
