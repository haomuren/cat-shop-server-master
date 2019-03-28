#### 接口文档

- 文件上传

```
url
  /api/v1/common/file_upload
method
  post
params
  file

返回数据
{
  "code": "success",
  "message": "文件上传成功",
  "info": "/uploads/20190221/1550738827910.jpeg"
}
```

- 用户注册

```
url
  /api/v1/auth/reg
method
  post
params
  userName    用户名
  password    密码
  nickName    昵称
  avatar      头像
return
  {
    "code": "success",
    "token": ""
  }
```

- 用户登录

```
url
  /api/v1/auth/login
method
  post
params
  userName  用户名
  password  密码
return
  {
    "code": "success",
    "token": ""
  }
```

- 获取用户信息

```
url
  /api/v1/users/info
method
  get
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
  }
```

- 获取商品信息
```
url
  /api/v1/products
method
  get
params
  per   每一页显示的数量,默认10
  page  当前页码,默认1
  name  商品名字
return
  {
    "totalCount": 14,   // 总记录数量
    "pages": 1,         // 当前页码
    "products": [...]
  }
```

#### 管理后台

- 用户管理

管理后台登录

> 管理后台默认登录账号密码为admin,此处管理员信息的管理功能暂未实现

```
url
  /api/v1/auth/manager_login
params
  userName: admin
  password: admin
return
  {
    "code": "success",
    "token": ""
  }
```

获取管理员信息

```
url
  /api/v1/users/manager_info
method
  get
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
  }
```

1. 获取用户列表

```
url
  /api/v1/admin/users
method
  get
params
  per       每一页显示的数量,默认10
  page      当前页码,默认1
  userName  用户名
  nickName  昵称
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "totalCount": 14,   // 总记录数量
    "pages": 1,         // 当前页码
    "products": [...]
  }
```

2. 新增用户

```
url
  /api/v1/admin/users
method
  post
params
  userName  用户名
  password  密码
  nickName  昵称
  avatar    头像
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "_id": "5c6e953a224d199e15f12b9d",
    "userName": "xiaoming",
    "password": "asdjiy12h1j21787gzcb#134",
    "nickName": "小明明",
    "avatar": "http://l.asdllksad/asd",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
  }
```

3. 修改用户

```
url
  /api/v1/admin/users/5c6e953a224d199e15f12b9d
method
  put
params
  userName  用户名
  password  密码
  nickName  昵称
  avatar    头像
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "_id": "5c6e953a224d199e15f12b9d",
    "userName": "xiaoming",
    "password": "asdjiy12h1j21787gzcb#134",
    "nickName": "小明明",
    "avatar": "http://l.asdllksad/asd",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
  }
```

4. 删除用户信息

```
url
  /api/v1/admin/users/5c6e953a224d199e15f12b9d
method
  delete
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "_id": "5c6e953a224d199e15f12b9d",
    "userName": "xiaoming",
    "password": "asdjiy12h1j21787gzcb#134",
    "nickName": "小明明",
    "avatar": "http://l.asdllksad/asd",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
  }
```

5. 获取指定用户的信息

```
url
  /api/v1/admin/users/5c6e953a224d199e15f12b9d
method
  get
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "_id": "5c6e953a224d199e15f12b9d",
    "userName": "xiaoming",
    "password": "asdjiy12h1j21787gzcb#134",
    "nickName": "小明明",
    "avatar": "http://l.asdllksad/asd",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
  }
```

- 商品管理

1. 获取商品列表

```
url
  /api/v1/admin/products
method
  get
params
  per   每一页显示的数量,默认10
  page  当前页码,默认1
  name  商品名字
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "totalCount": 14,   // 总记录数量
    "pages": 1,         // 当前页码
    "products": [...]
  }
```

2. 新增商品信息

```
url
  /api/v1/admin/products
method
  post
params
  name          商品名字
  descriptions  商品简介
  quantity      数量(库存)
  price         价格
  coverImg      主图
headers
  authorization Bearer token  // 需要提供jwt信息
return
  {
    "quantity": 89,
    "price": 6999,
    "_id": "5c6e953a224d199e15f12b9d",
    "name": "Apple iPhone X",
    "descriptions": "Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机",
    "coverImg": "https://img10.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
  }
```

3. 修改商品信息

```
url
  /api/v1/admin/products/:id
method
  put
params
  name          商品名字
  descriptions  商品简介
  quantity      数量(库存)
  price         价格
  coverImg      主图
headers
  authorization Bearer token  // 需要提供jwt信息
return
  返回商品信息
  {
    "quantity": 89,
    "price": 6999,
    "_id": "5c6e953a224d199e15f12b9d",
    "name": "Apple iPhone X",
    "descriptions": "Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机",
    "coverImg": "https://img10.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
  }
```

4. 删除商品信息

```
url
  /api/v1/admin/products/:id
method
  delete
headers
  authorization Bearer token  // 需要提供jwt信息
return
  返回商品信息
  {
    "quantity": 191,
    "price": 6999.99,
    "_id": "5c6e965e224d199e15f12b9f",
    "name": "小米9",
    "descriptions": "牛逼的小米9",
    "createdAt": "2019-02-21T12:15:26.669Z",
    "updatedAt": "2019-02-21T12:15:26.669Z",
    "__v": 0
}
```

5. 根据ID获取商品信息

```
url
  /api/v1/admin/products/:id
method
  get
headers
  authorization Bearer token  // 需要提供jwt信息
return
  返回商品信息
  {
    "quantity": 191,
    "price": 6999.99,
    "_id": "5c6e965e224d199e15f12b9f",
    "name": "小米9",
    "descriptions": "牛逼的小米9",
    "createdAt": "2019-02-21T12:15:26.669Z",
    "updatedAt": "2019-02-21T12:15:26.669Z",
    "__v": 0
}
```
