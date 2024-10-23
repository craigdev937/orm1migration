import express from "express";
import { USER } from "../controllers/UserCon";

export const userRt: express.Router = express.Router();
    userRt.post("/", USER.Create);
    userRt.get("/", USER.FetchAll);
    userRt.get("/:id", USER.GetOne);
    userRt.put("/:id", USER.Update);
    userRt.delete("/:id", USER.Delete);
    


