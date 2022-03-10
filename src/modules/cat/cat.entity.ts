import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, Table } from "sequelize-typescript";
@Table
export class Cat extends Model {
    @Column
    @ApiProperty()
    name: string

    @Column
    @ApiProperty()
    age: number

    @Column
    @ApiProperty()
    breed: string
}