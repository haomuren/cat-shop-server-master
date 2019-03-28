// get post put delete
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../../models');

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
  if (req.query.userName) {
    var userName = req.query.userName; //获取查询条件
		query.userName = new RegExp(userName,"i"); // 查询条件 正则
  }
  if (req.query.nickName) {
    var nickName = req.query.nickName; //获取查询条件
		query.nickName = new RegExp(nickName,"i"); // 查询条件 正则
  }
  const totalCount = await User.find(query).count();
  const users = await User.find(query).sort({ createdAt: -1 })
    .limit(per)
    .skip(per * (page - 1));
  res.send({
    totalCount,
    pages: Math.ceil(totalCount/per),
    users
  });
});

// 根据id获取单个用户
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// 新增用户
router.post('/', async (req, res, next) => {
  const userExist = await User.count({ userName: req.body.userName });
  if (userExist > 0) {
    res.send({
      code: 'error',
      message: 'userName exist!',
    });
  } else {
    const user = new User(req.body);
    // 用户密码加密处理
    const salt = bcrypt.genSaltSync(10);
    const pwd = bcrypt.hashSync(req.body.password, salt);
    user.password = pwd;
    const userSave = await user.save();
    res.send(userSave);
  }
});

// 修改用户
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateResult = await User.findByIdAndUpdate(id, req.body);
    res.send(updateResult);
  } catch (err) {
    next(err);
  }
});

// 删除用户
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const delResult = await User.findByIdAndDelete(id);
    res.send(delResult);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
