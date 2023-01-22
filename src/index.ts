import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
config();

const app: Express = express();

app.get("/", (_req: Request, res: Response): void => {
    res.send("Hello TS API!!!!");
})

app.listen(process.env.PORT, (): void => {
    console.log("Listenning on port " + process.env.PORT);
});
