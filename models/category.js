import mongoose from "mongoose";

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
})

CategorySchema.virtual("url").get(function () {
  return `/categories/${this._id}`;
});

const Category = mongoose.model('Category', CategorySchema)
export default Category