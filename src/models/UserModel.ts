import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    @Column() name: string;
    @Column({unique: true}) email: string;
    @Column() password: string;
};

