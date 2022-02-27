import express from "express";
import mongoose from "mongoose";
import blogs from "../libs/blogs.js";
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    dbName: "Blogs",
    useNewUrlParser: true,
    tls: true,
    tlsCAFile: __dirname + "/1.crt",
  })
  .then(() => {
    console.log("dbconnected");
  });

module.exports = async (request, response) => {
  const blog = await blogs.find({});
  response.send(blog);
};
