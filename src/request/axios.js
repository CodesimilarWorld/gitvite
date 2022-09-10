import axios from 'axios'
import nProgress from 'nprogress'
import "nprogress/nprogress.css"

export const $axioss = function () {
    return new Promise((resolve, reject) => {
        axios.request({
            method:'get',
            url: 'http://localhost:5001/menu'
        }).then(response=>{
            resolve(response)
        })
    })
}

 //请求拦截器
 axios.interceptors.request.use(function(config){
    console.log('请求拦截器')
    //进度条
    nProgress.start()
    return config
  },function(error){
    return Promise.reject(error)
  })

  //响应拦截器
  axios.interceptors.response.use(function(response){
    console.log('响应拦截器')
    //进度条结束
    nProgress.done()
    return response.data
  },function(error){
    return Promise.reject(error)
  })

// export default axioss