import mongoose from "mongoose";
const { Schema } = mongoose;

const blogs = new Schema({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
export default mongoose.model("blogs", blogs);
