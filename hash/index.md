## 原理说明

1. a和b是在同一个域下面
2. a页面iframe src先引用c页面
3. c页面中的iframe 引用b页面并将hash加上
4. 在b页面赋值c传来的hash
5. 在页面用hashchange监听获取hash

