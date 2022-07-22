import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { User } from "../../entities/user";
import { Post } from "../../entities/post";

export default class InitialDatabaseSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {


        const admin = new User();

        admin.name = 'Admin'
        admin.email = 'admin@admin.com'
        admin.password = 'admin'

        await admin.save();


        const users = await factory(User)().createMany(15);

        await factory(Post)()
            .map(async (post) => {
                post.user = users[Math.floor(Math.random() * users.length)];
                return post;
            })
            .createMany(100);
    }
}