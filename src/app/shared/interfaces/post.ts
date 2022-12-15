import { ISlope } from "./slope";
import { IUser } from "./user";

export interface IPost {
    likes: string[];
    _id: string;
    text: string;
    userId: IUser;
    themeId: ISlope;
    created_at: string;
    updateAt: string;
    __v:number;
}