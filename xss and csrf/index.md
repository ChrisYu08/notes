# XSS攻击

1. url传参类型
2. dom注入类型（纯前端img标签等）
3. 存储类型

防御：添加encode，做标签的解析判断等等


# CSRF攻击 跨站攻击
获取登陆cookie 通过钓鱼网站，iframe(display) 表单提交，自动转账等等

防御：
1. 添加验证码（添加svg-capcha验证码）
2. 判断来源(referer)
3. token（每次请求带token）