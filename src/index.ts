import "reflect-metadata";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { trim } from "./middleware/trim";
import { ERR } from "./middleware/midError";
import { playRt } from "./routes/PlayerRt";

(() => {
    const app: express.Application = express();
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(logger("dev"));
    app.use(trim);
    app.use("/api/player", playRt);
    app.use(ERR.notFound);
    app.use(ERR.errHandler);
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();



