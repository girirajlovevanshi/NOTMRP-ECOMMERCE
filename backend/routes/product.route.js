// routes/product
import express from 'express';
import Product from '../models/product.model.js'
import auth from '../middleware/auth.middleware.js';

const router = express.Router();

// Create a product (secured route)
router.post('/', auth, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all products (optionally filter by category via query param)
router.get('/', async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const products = await Product.find(filter).populate('category');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({_id:req.params.id});
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product
router.put('/:id', auth, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product
router.delete('/:id', auth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;