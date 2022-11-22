import {User} from "./user.entity";
import {AppDataSource} from "../../data-source";

class UserService {
    public async findAll(): Promise<User[]> {
        return await AppDataSource.getRepository(User).find();
    }

    public async findById(userId: string): Promise<User> {
        return await AppDataSource.getRepository(User).findOne({
            where: {
                id: userId
            }
        })
    }
}

export default new UserService();
