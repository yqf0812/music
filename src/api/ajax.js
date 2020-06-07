import axios from 'axios'
import qs from 'qs';
export default function ajax(url = "", params = {}, type = "GET") {
    //定义promise对象
    let promise;
    return new Promise((resolve, reject) => {
        //判断请求的方式
        if ("GET" === type) {
            // //拼接请求的字符串
            // let paramsStr = "";
            // Object.keys(params).forEach(key => {
            //     paramsStr += key + "=" + params[key] + "&";
            // });
            // //过滤最后的&
            // if (paramsStr !== "") {
            //     paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"));
            //     //完整的路径
            //     url += "?" + paramsStr;
            // } else {
            //     url += paramsStr;
            // }

            //发送get请求
            promise = axios.get(url, qs.stringify(params));
        } else if ("POST" === type) {
            promise = axios.post(url, params, qs.stringify(params));
        }
        //返回请求的结果
        promise
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}