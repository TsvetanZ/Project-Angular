import { IUser } from "./user";

export interface  ISlope {
    themeName: string, // 
    subscribers:string[],
    userId: IUser, 
    posts: string[],
    created_at: string;
    updateAt: string;
    imageUrl: string;
}