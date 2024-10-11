import express from "express";
import { User } from "../models/UserModel";

class UserClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const user = await User
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([{
                name: "Elizabeth Tang", 
                email: "liz@hdq.com", 
                password: "Magic123"
            }])
            .execute()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await User
                .find()
                .then((users) => res.status(200)
                .json(users));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Email: express.Handler = async (req, res, next) => {
        try {
            const user = await User
            .createQueryBuilder("users")
            .select(["users.email", "users.name"])
            .getMany()
            res.status(200)
            .json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Id: express.Handler = async (req, res, next) => {
        try {
            const user = await User
            .createQueryBuilder("users")
            .where("users.id = :id", {id: 2})
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
            let user = await User
            .createQueryBuilder()
            .update(User)
            .set({ name: "Nina Cortez", email: "nina@hdq.com" })
            .where("id = :id", { id: 5 })
            .execute()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Delete: express.Handler = async (req, res, next) => {
        try {
            let user = await User
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", {id: 2})
            .execute()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    // Create: express.Handler = async (req, res, next) => {
    //     try {
    //         const user = User.create({
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: req.body.password
    //         });
    //         await user.save();
    //         res.status(200).json(user);
    //     } catch (error) {
    //         res.status(500).json(res.statusMessage);
    //         next(error);
    //     }
    // };
};

export const USER: UserClass = new UserClass();





