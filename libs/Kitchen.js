import mongoose from "mongoose";

const { Schema } = mongoose;

const kitchen = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
  },
});
export default mongoose.model("kitchen", kitchen);
