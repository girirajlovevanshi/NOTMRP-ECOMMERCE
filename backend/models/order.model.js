// models/Order
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
    }],
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', OrderSchema);