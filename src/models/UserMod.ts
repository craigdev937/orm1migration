import { BaseEntity, Column, Entity, OneToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { ChannelModel } from "./ChannelMod";

@Entity({name: "users"})
export class UserModel extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column() age: number;
    @Column({ unique: true }) email: string;

    @OneToOne(() => ChannelModel, (channel) => channel.user)
    channel: ChannelModel;
};



