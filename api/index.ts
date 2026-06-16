import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';
import { AppModule } from '../src/app.module';

const server = express();
let ready: Promise<void> | null = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  await app.init();
}

export default async function handler(req: Request, res: Response) {
  if (!ready) {
    ready = bootstrap();
  }

  await ready;
  return server(req, res);
}
