import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CreateMarcaDTo {
@IsString()
@IsNotEmpty()
@MinLength(5)
id: string;
@IsNumber()
@IsNotEmpty()
name: string;

@IsNumber()
@IsNotEmpty()
@MinLength(10)
categoria: string;


@IsNotEmpty()
@MinLength(5)
pais_origen: string;

@Optional()
obsrevacion: string;


}