import mongoose from "mongoose";

const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
},
{
  timestamps: true,
})

ItemSchema.virtual("inStock").get(function () {
  return (this.quantity > 1);
});

ItemSchema.virtual("url").get(function () {
  return `/items/${this._id}`;
});

const Item = mongoose.model('Item', ItemSchema)
export default Item