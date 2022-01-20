import { BaseModel } from "./base.model";

export interface ChatMessage extends BaseModel {
    message?: string;
    timestamp?: Date;
    chatRoom?: string;
    screenName?: string;
}
