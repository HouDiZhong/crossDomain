## 原理说明

1. a和b是在同一个域下面
2. a页面iframe src先引用c页面
3. c页面设置window.name值
4. 在a页面将iframe的src 引到同域下的b页面
5. 在去取b页面的window.name


解释： 
    a和c不在同一个页面所以不能取到c的window.name
    iframe的src地址改变，但是里面的window.name还会保留