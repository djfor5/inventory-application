import mongoose from "mongoose";

const Schema = mongoose.Schema

const ItemInstanceSchema = new Schema({
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
},
{
  timestamps: true,
})

ItemInstanceSchema.virtual("url").get(function () {
  return `/iteminstances/${this._id}`;
});

const ItemInstance = mongoose.model('ItemInstance', ItemInstanceSchema)
export default ItemInstance