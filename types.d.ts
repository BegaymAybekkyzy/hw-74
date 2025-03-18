export interface IMessageRequest {
    message: string;
}

export interface IMessageResponse extends IMessageRequest {
    datetime: string;
}