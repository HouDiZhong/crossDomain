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
