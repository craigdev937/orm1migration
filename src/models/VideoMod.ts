import { BaseEntity, Column, Entity, JoinTable, 
    ManyToMany, ManyToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { ChannelModel } from "./ChannelMod";
import { TagModel } from "./TagMod";

@Entity()
export class VideoModel extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() title: string;

    @ManyToOne(() => ChannelModel, 
    (channel) => channel.videos) 
    channel: ChannelModel;

    @ManyToMany(() => TagModel)
    @JoinTable()
    tags: TagModel[];
};



