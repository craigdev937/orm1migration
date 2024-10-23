import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TagModel extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;
};



