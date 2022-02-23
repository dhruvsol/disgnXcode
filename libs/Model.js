import mongoose from "mongoose";
const { Schema } = mongoose;

const Enquiry = new Schema({
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
  enquiry: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Enquire", Enquiry);