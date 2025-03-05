// routes/order
import express from 'express';
import Order from '../models/order.model.js';
import auth from '../middleware/auth.middleware.js';
import Product from '../models/product.model.js'

const router = express.Router();

// Place an order (requires authentication)
router.post('/', auth, async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    let finalPrice=0;
    for (let i = 0; i < products.length; i++) {
      let product = await Product.findOne({_id : products[i].product});
      finalPrice += ( parseFloat(product.price) * products[i].quantity)
    }
    // return user if there is a change b/w prices
    // if(parseFloat(totalAmount) !== finalPrice){
    //   return res.status(500).json({ error : "price change detected" });
    // }
    const order = new Order({
      user: req.user.userId,
      products,
      totalAmount : finalPrice
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get orders for the logged-in user
router.get('/myorders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId })
      .populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;