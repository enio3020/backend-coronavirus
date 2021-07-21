import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { DB_URI, APP_NAME, MAIL_PASSWORD, MAIL_USER } from "./config";
import * as path from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [MongooseModule.forRoot(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}),
  MailerModule.forRoot({
    transport: {
        service: 'gmail',
        auth: {
            user: `${MAIL_USER}`,
            pass: `${MAIL_PASSWORD}`
        }
    },
    defaults: {
        from: `"${APP_NAME}" <${MAIL_USER}>`
    },
    template: {
        dir: path.join(__dirname, '../')+'/src/templates',
        adapter: new HandlebarsAdapter(),
        options: {
            strict: true
        }
    }
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
