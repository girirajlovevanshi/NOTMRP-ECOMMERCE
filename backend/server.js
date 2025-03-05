// server
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';

dotenv.config();

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN
}));
app.use(express.json({
    limit : '1000kb'
}));
app.use(express.urlencoded({
    limit : "1000kb",
    extended : true
}))
// Connect to MongoDB
connectDB()

// Import routes 
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import categoryRoutes from './routes/categry.route.js';
import orderRoutes from './routes/order.route.js';

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));