import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marca } from "./entities/marcas.entities";



@Module({
imports: [TypeOrmModule.forFeature([Marca])],
controllers: [],
providers: [],
})

export class MarcatModule {}