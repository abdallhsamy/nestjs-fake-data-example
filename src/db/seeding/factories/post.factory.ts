// import * as Faker from "faker";
const { Faker } = require('@faker-js/faker');

import { define } from "typeorm-seeding";

import { Post } from "../../entities/post";

define(Post, (faker: typeof Faker) => {
    const post = new Post();
    post.title = faker.lorem.words(8);
    post.description = faker.lorem.paragraph(6);
    post.isPublished = faker.random.boolean();
    return post;
});