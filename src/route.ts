import express from "express";
import UserController from "./domain/user/user.controller";

const route = express.Router();

route.get('/users', UserController.findAll);
route.get('/user', UserController.findById);

export default route;
