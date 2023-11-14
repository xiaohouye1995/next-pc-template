import axios from 'axios'
import { message } from 'antd'
import { store } from "@/store/store";


let reqConfig = null
const instance = axios.create()

// 请求拦截
instance.interceptors.request.use(
  (request) => {
    /* token setting*/
    const token = store.getState().global.token
    request.headers.token = token
    /* download file*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    /* upload file*/
    if (request.isUploadFile) {
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    reqConfig = request
    /* params会拼接到url上*/
    if (request.isParams) {
      request.params = request.data
      request.data = {}
    }
    return request
  },
  (err) => {
    Promise.reject(err)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    // 如果是下载文件直接返回
    if (reqConfig.isDownLoadFile) {
      return res
    }
    if (res.status !== 200) {
      message.error(res.data.msg || '网络异常，请稍后再试')
      return Promise.reject(res)
    }
    if (res.data.code === 200) {
      return Promise.resolve(res.data.data)
    } else {
      message.error(res.data.msg || '网络异常，请稍后再试')
      return Promise.reject(res)
    }
  },
  (err) => {
    message.error(err.message || '网络异常，请稍后再试')
    return Promise.reject(err.message)
  }
)

export function axiosReq({
  url,
  data,
  method,
  isParams,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
}) {
  return instance({
    url: url,
    method: method ?? 'get',
    data: data ?? {},
    isParams: isParams ?? false,
    isUploadFile: isUploadFile ?? false,
    isDownLoadFile: isDownLoadFile ?? false,
    baseURL: baseURL ?? process.env.NEXT_PUBLIC_API,
    timeout: timeout ?? 15000
  })
}

export default axiosReq
