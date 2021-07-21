import {resolve} from 'path'
require('dotenv').config({path: resolve(__dirname, '../.env')});

export const APP_PORT = process.env.PORT || 3002;

export const DB_URI = process.env.DB_URI;

export const APP_NAME = process.env.APP_NAME;

export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

export const MAIL_USER = process.env.MAIL_USER;