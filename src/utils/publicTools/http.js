import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create()

//baseURl先不写
//http.defaults.baseURL = 

http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    return res
  } else {
    Toast(res.msg)
  }
}, error => {
  Toast(error.message)
})

export default http