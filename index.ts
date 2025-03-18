import express from "express";
import messageRoutes from "./routers/messages";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/messages", messageRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});
