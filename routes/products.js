const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth");

const router = express.Router();

// GET all products (with pagination, sorting, and filtering)
router.get("/", async (req, res) => {
  const { page = 1, limit = 10, sort = "createdAt", priceMin, priceMax } = req.query;
  const query = {};

  if (priceMin) query.price = { $gte: priceMin };
  if (priceMax) query.price = { ...query.price, $lte: priceMax };

  const products = await Product.find(query)
    .sort({ [sort]: 1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(products);
});

// POST: Add product (Protected)
router.post("/", auth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// DELETE Product
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
