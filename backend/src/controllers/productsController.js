const Product = require('../models/Product');
exports.getAll = async (_, res) => {
  const products = await Product.find();
  res.json(products);
};
