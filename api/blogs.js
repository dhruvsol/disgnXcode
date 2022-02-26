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
  if (request.method === "GET") {
    const blogsobj = new blogs({
      heading: request.body.heading,
      subheading: request.body.subheading,
      image: request.body.image,
    });
    try {
      await blogsobj.save();
      response.status(200).send(1);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    const fet = await blogs.find({});
    return response.json(fet);
  }
};
