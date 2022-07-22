import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./db/entities/user";
import {Post} from "./db/entities/post";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Post],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.example'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
