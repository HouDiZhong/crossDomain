# 使用
1. git clone git@github.com:HouDiZhong/crossDomain.git
2. cd crossDomain
3. npm i   或   yarn add
4. cd x  // x 某一个目录
5. node sever.js    // 有的有两个sever，都要运行起来
6. http://localhost:3000


## 同源策略

> 1. 协议
> 2. 域名
> 3. 端口
> 4. 同域

## 实现跨域

> 1. jsonp
> 2. cors
> 3. postMessage
> 4. document.domain
> 5. window.name
> 6. location.hsah
> 7. http-proxy
> 8. nginx
> 9. websocket

#### jsonp
```
let jsonp = ({url,params,cd}) => {
    return new Promise((resolve,reject) => {
        let script = docment.createElement('script');
        window[cd] = function(data) {
            resolve(data);
            document.body.removeChild(script);
        };
        params = {...params,cd};
        let arr = [];
        for(let key in params) {
            arr.push(`${key}=${params[key]}`);
        }
        script.src = `${url}?${arrs.join('$')}`;
        document.body.appendChild(script);
    })
};

jsonp({
    url: 'url',
    params: {key: '关键词'},
    cd: 'show'
}).then(data => {
    console.log(data);
})

缺点：  
    只能进行get请求
    不安全
```

## document.domain
#### 注意： 一级域名必须一致
##### 不知道为什么我用谷歌浏览器测试，发现可以不设置document.domain 就可以访问了
```
比如
// true
www.baidu.com    document.domain = 'baidu.com';   
www.pan.baidu.com    document.domain = 'baidu.com';  
// false
www.baidu.com    document.domain = 'qq.com';
www.pan.baidu.com   document.domain = 'qq.com';


本条例子需要替换一下hosts文件

Windows系统hosts位于 C:\Windows\System32\drivers\etc\hosts
Android（安卓）系统hosts位于 /system/etc/hosts
Mac（苹果电脑）系统hosts跟Linux一样位于 /etc/hosts
iPhone（iOS）系统hosts跟Linux Mac一样位于 /etc/hosts
Linux系统hosts位于 /etc/hosts



可以替换一下我目录里的hosts文件，建议将源文件保存，演示完成在替换回来
```

## nginx 
```
nginx.conf
和core一样在nginx的配置文件设置header
http {
  ###start####
  add_header Access-Control-Allow-Origin *;
  add_header Access-Control-Allow-Headers X-Requested-With;
  add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
  ###end ###
}
```

## http-proxy
```
在webpack中的devServer中配置proxy
devServer:{
    proxy: {
        '/api': { // 以api开头的请求
            target: 'http://localhost:3000', // 目标地址
            pathRewrite: {'/api': ''}  // 将'/api'重新为'' 
        }
    } 
}
```

