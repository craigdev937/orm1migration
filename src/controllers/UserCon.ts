import express from "express";
import { UserModel } from "../models/UserMod";

class UserClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const user = await UserModel
            .createQueryBuilder()
            .insert()
            .into(UserModel)
            .values({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            })
            .execute()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const users = await UserModel
            .createQueryBuilder()
            .select("users")
            .from(UserModel, "users")
            .getMany()
            res.status(200)
            .json(users);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    GetOne: express.Handler = async (req, res, next) => {
        try {
            const user = await UserModel
            .createQueryBuilder("users")
            .select()
            .where("id = :id", {id: req.params.id})
            .getOne()
            res.status(200)
            .json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Update: express.Handler = async (req, res, next) => {
        try {
            let user = await UserModel
            .createQueryBuilder()
            .update(UserModel)
            .set({ 
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            })
            .where("id = :id", { id: req.params.id })
            .execute()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Delete: express.Handler = async (req, res, next) => {
        try {
            let user = await UserModel
            .createQueryBuilder()
            .delete()
            .from(UserModel)
            .where("id = :id", {id: req.params.id})
            .execute()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const USER: UserClass = new UserClass();





