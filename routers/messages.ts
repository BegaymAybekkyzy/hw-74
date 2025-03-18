import express from "express";
import fileDB from "../fileDB";
import {IMessageRequest} from "../types";

const messageRoutes = express.Router();

messageRoutes.get("/", async (req, res) => {
    res.send("New message");
});

messageRoutes.post("/", async (req, res) => {
    const newMessage: IMessageRequest = {
        message: req.body.message,
    }

    await fileDB.addNewMessage(newMessage);
    res.send("Message created");
});

export default messageRoutes;