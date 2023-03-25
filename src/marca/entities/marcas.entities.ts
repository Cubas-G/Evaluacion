import { Optional } from "@nestjs/common";
import { IsNotEmpty, MinLength } from "class-validator";
import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({type: 'text'})
@MinLength(5)
@IsNotEmpty()
name: string;

@Column({type: 'text'})
@IsNotEmpty()
categoria: string;

@Column({type: 'text'})
@IsNotEmpty()
@MinLength(3)
pais_origen: string;


@Column({type: 'text'})
@Optional()
observacion: string;









}