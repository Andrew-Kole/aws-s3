import express from "express";
import s3Routes from "./routes/s3.routes";

const app = express();
const port = 3000;

app.use('/api', s3Routes);

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
});