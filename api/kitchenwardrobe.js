import express from "express";
import mongoose from "mongoose";
import Enquire from "../libs/Model.js";
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    dbName: "Enquiry",
    useNewUrlParser: true,
    tls: true,
    tlsCAFile: __dirname + "/1.crt",
  })
  .then(() => {
    console.log("dbconnected");
  });

module.exports = async (request, response) => {
  const enqobj = new Enquire({
    name: request.body.name,
    number: request.body.number,
    email: request.body.email,
    enquiry: request.body.enquiry,
    path: request.body.path,
  });
  try {
    await enqobj.save();
    response.status(200).send(1);
  } catch (error) {
    console.log(error.message);
  }
};
