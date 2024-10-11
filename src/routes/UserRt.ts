import express from "express";
import { USER } from "../controllers/UserCon";

export const userRt: express.Router = express.Router();
    userRt.post("/", USER.Create);
    userRt.get("/", USER.FetchAll);
    userRt.get("/email", USER.Email);
    userRt.get("/:id", USER.Id);
    userRt.put("/:id", USER.Update);
    userRt.delete("/:id", USER.Delete);
    


