import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
@PrimaryGeneratedColumn('uuid')
id: number;

@Column({type: 'text'})
nombre: string;


@Column({type: 'text'})
description: string;

@Column({type: 'numeric'})
precio: number;


@Column({type: 'numeric'})
stock: number;










}