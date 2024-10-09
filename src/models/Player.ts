import { PrimaryGeneratedColumn, UpdateDateColumn,
    BaseEntity, Column, CreateDateColumn, Entity,
 } from "typeorm";

@Entity({name: "players"})
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column({unique: true}) email: string;
    @Column() age: number;
    @Column({unique: true}) alias: string;
    @Column() info: string;
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
};


