import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { MarcatModule } from './marca/marcas.module';


@Module({
  imports: [
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
  //configuraciones para la DB
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  autoLoadEntities: true,
  synchronize: true,
  }),
  ProductModule,
  MarcatModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
