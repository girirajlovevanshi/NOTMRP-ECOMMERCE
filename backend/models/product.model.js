// models/Product
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    barcode: { type: String, unique: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    stock: { type: Number, default: 0 },
    description: { type: String }
});

export default mongoose.model('Product', ProductSchema);