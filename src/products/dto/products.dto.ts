import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CreateProductDTo {
@IsString()
id: string;


@IsNumber()
@IsNotEmpty()
@MinLength(10)
nombre: string;


@IsNotEmpty()
@MinLength(5)
description: string;

@Optional()
@IsNotEmpty()
stock: number;

@Optional()
@IsNotEmpty()
precio: number;


}