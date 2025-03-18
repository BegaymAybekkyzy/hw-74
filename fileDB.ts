import {promises as fs} from 'fs';
import {IMessageRequest, IMessageResponse} from './types';

const path = './messages';
let fileName: string;

const fileDB = {
    async init() {

    },

    async save(data: IMessageResponse) {
        return fs.writeFile(`${path}/${data.datetime}.txt`, JSON.stringify(data));
    },

    async run() {
        const file = await fs.readdir(path);
        file.forEach((file) => {
            console.log(path + ' ' + file);
        })
    },

    async addNewMessage(msg: IMessageRequest) {
        const date = new Date().toISOString();
        const message = {...msg, datetime: date};

        await this.save(message);
    }

}

export default fileDB