import {DataSource} from "typeorm";
import {User} from "./domain/user/user.entity";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

export const AppDataSource = new DataSource({
    type          : "mysql",
    host          : process.env.DB_HOST,
    port          : parseInt(process.env.DB_PORT || '3306', 10),
    username      : process.env.DB_USER,
    password      : process.env.DB_PASSWORD,
    database      : "enerdot",
    synchronize   : false,
    logging       : ['info', "error"],
    entities      : [User],
    namingStrategy: new SnakeNamingStrategy()
})
