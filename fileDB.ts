import {promises as fs} from 'fs';
import {IMessageRequest, IMessage} from './types';

const path = './messages';

const fileDB = {
    async save(data: IMessage) {
        return fs.writeFile(`${path}/${data.datetime}.txt`, JSON.stringify(data));
    },

    async recentMessages() {
        const file = await fs.readdir(path);
        const lastFiles = file.sort().slice(-5);

        const lastMessages: IMessage[] = await Promise.all(lastFiles.map(async (file) => {
            const message = await fs.readFile(`${path}/${file}`, 'utf-8');
            return JSON.parse(message);
        }));

        return lastMessages;
    },

    async addNewMessage(msg: IMessageRequest) {
        const date = new Date().toISOString();
        const message = {...msg, datetime: date};
        await this.save(message);
    }
}

export default fileDB