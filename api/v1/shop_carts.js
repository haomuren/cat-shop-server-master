const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { ShopCart } = require('../../models');
const { jwtSecret } = require('../../utils/config');

router.get('/', async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // 获取token
    const decoded = jwt.verify(token, jwtSecret);
    const { userId } = decoded;
    const shopCarts = await ShopCart.find({ user: userId }).populate('product');
    res.send(shopCarts);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { product } = req.body; // 新增购物车时 只传递商品id即可
    const token = req.headers.authorization.split(' ')[1]; // 获取token
    const decoded = jwt.verify(token, jwtSecret);
    const { userId } = decoded;
    await ShopCart.findOneAndUpdate({
      user: userId,
      product,
    }, {
      $inc: {
        quantity: 1, // 数量加1
      },
    }, {
      upsert: true, // 如果不存在就创建
    });
    res.send({
      code: 'success',
      message: '加入购物车成功！',
    });
  } catch (err) {
    next(err);
  }
});

router.get('/user', async (req, res, next) => {
  try {
    const { product } = req.body; // 新增购物车时 只传递商品id即可
    const token = req.headers.authorization.split(' ')[1]; // 获取token
    const decoded = jwt.verify(token, 'Arivin');
    const { userId } = decoded;
    res.json({userId});
  } catch (err) {
    next(err);
  }
})

module.exports = router;
