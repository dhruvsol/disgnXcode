import mongoose from "mongoose";

const { Schema } = mongoose;

const retailer = new Schema({
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
export default mongoose.model("retailer", retailer);
