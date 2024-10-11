import express from "express";
import { User } from "../models/UserModel";

class UserClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const user = User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            await user.save();
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
};

export const USER: UserClass = new UserClass();





