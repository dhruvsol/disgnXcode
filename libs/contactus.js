import mongoose from "mongoose";

const { Schema } = mongoose;

const partner = new Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
  },
  enquiry: {
    type: String,
  },
});
export default mongoose.model("partner", partner);
