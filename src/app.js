import express from "express"

import { healthcheckRouter } from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck",healthcheckRouter);

const app = express()


export default app;