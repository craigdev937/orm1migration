import { BaseEntity, Column, Entity, 
    JoinColumn, OneToMany, OneToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "./UserMod";
import { VideoModel } from "./VideoMod";

@Entity({name: "channels"})
export class ChannelModel extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;

    @OneToOne(() => UserModel, (user) => user.channel)
    @JoinColumn()
    user: UserModel;

    @OneToMany(() => VideoModel, (video) => video.channel)
    videos: VideoModel[];
};



