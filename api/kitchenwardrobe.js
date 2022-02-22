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
    tlsCAFile: process.env.TSLC,
  })
  .then(() => {
    console.log("dbconnected");
  });

module.exports = async (request, response) => {
  if (request.method === "GET") {
    const enqobj = new Enquire({
      name: request.body.name,
      number: request.body.number,
      email: request.body.email,
      enquiry: request.body.enquiry,
    });
    try {
      const newEnq = await enqobj.save();
      response.json(newEnq);
    } catch (error) {
      console.log(error.message);
    }
  }
};
