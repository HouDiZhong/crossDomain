let jsonp = ({url,params,cd}) => {
    return new Promise((resolve,reject) => {
        let script = document.createElement('script');
        window[cd] = data => {
            resolve(data);
            document.body.removeChild(script);
        };
        params = {...params,cd};
        let arr = [];
        for(let i in params) {
            arr.push(`${i}=${params[i]}`);
        };
        script.src = `${url}?${arr.join('&')}`;
        document.body.appendChild(script);
    })
}


