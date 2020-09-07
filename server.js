/*importing all dependencies; express for routing,
mongoose for connecting to and interacting with mongoDB
passport for authentication*/
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import keys from "./config/keys.mjs";

// app config
dotenv.config();
//{path: path/filename}
const app = express();

//CORS middleware
//applying CORS middleware
app.use(
  cors({
    allowedHeaders: [
      "sessionId",
      "Content-Type",
      "Origin, X-Requested-With, Accept, Authorization, remember-me, type",
    ],
    exposedHeaders: ["sessionId, Authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

//DB CONFIG
const db = keys.mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log("failed to connect", err));

//process.env variables
let port = process.env.PORT;
let host = process.env.HOST;

//api endpoints
app.get("/", (req, res) =>
  res.status(200).send("Hello world! I'm Sholly the Great and confident")
);

//listening session
app.listen(port, host, () =>
  console.log(`server is listening to port ${host}:${port}`)
);
