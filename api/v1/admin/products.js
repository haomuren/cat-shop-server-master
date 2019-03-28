const router = require('express').Router();
const Product = require('../../../models/index').Product;

router.get('/', async (req, res, next) => {
  const per = req.query.per || 10; // 每一页的数量
  const page = req.query.page || 1; // 页数
  if (page <= 0) {
    page = 1;
  }
  if (per <= 0) {
    per = 10;
  }
  let query = {};
  if (req.query.name) {
    var name = req.query.name; //获取查询条件
		query.name = new RegExp(name,"i"); // 查询条件 正则
  }
  const totalCount = await Product.find(query).count();
  const products = await Product.find(query).sort({ createdAt: -1 })
    .limit(per)
    .skip(per * (page - 1));
  res.send({
    totalCount,
    pages: Math.ceil(totalCount/per),
    products
  });
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const productSave = await product.save();
    res.send(productSave);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateResult = await Product.findByIdAndUpdate(id, req.body);
    res.send(updateResult);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const delResult = await Product.findByIdAndDelete(id);
    res.send(delResult);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
