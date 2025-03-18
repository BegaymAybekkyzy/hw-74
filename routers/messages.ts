import express from "express";
import fileDB from "../fileDB";
import {IMessageRequest} from "../types";

const messageRoutes = express.Router();

messageRoutes.get("/", async (req, res) => {
    const lastMessages = await fileDB.recentMessages()
    res.send(lastMessages);
});

messageRoutes.post("/create", async (req, res) => {
    const newMessage: IMessageRequest = {
        message: req.body.message,
    }

    await fileDB.addNewMessage(newMessage);
    res.send(newMessage);
});

export default messageRoutes;