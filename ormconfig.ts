import { User } from "./src/db/entities/user"
import { Post } from "./src/db/entities/post"

export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,

    name: "default",
    // type: "sqlite",
    // database: "src/db/dev.db",
    entities: [User, Post],
    synchronize: true,
    logging: false,
    // These two lines have been added:
    seeds: ["src/db/seeding/seeds/**/*{.ts,.js}"],
    factories: ["src/db/seeding/factories/**/*{.ts,.js}"],
};