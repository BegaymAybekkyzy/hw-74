export interface IMessageRequest {
    message: string;
}

export interface IMessage extends IMessageRequest {
    datetime: string;
}