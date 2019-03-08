import axios from 'axios'

export const getData1 = () => {
    axios({
        method: 'get',
        url: "http://192.168.1.205:8081/pmsProduct/category/list",
    })
        .then(response => response.data)
        .then(data => {
            console.log(1, data)

            if (!window.localStorage) {
                alert("浏览器不支持localstorage");
                return false
            } else {
                var storage = window.localStorage;
                // 1、写入a字段
                storage["token"] = 1;
            }

        })
        .catch(error => {
            alert(JSON.stringify(error))
        })
}
const getData2 = () => {
    axios({
        method: 'get',
        url: "http://192.168.1.205:8081/esProduct/search?pageSize=5&sort=0",
    })
        .then(response => response.data)
        .then(data => {
            console.log(2, data)
        })
        .catch(error => {
            alert(JSON.stringify(error))
        })
}