import {Request, Response} from "express";
import UserService from "./user.service";

class UserController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        const users = await UserService.findAll();
        console.log("Found Users: ", users);
        return res.send(users);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const user = await UserService.findById(req.query.userId as string);
        return res.send(user);
    }
}

export default new UserController();
