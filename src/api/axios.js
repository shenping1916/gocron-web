import axios from "axios";

export default function axi() {
  // 创建实例
  const instance = axios.create({
    // 默认接口超时: 10s
    timeout: 10000
  });

  // axios请求拦截器
  instance.interceptors.request.use(
    config => {},
    error => {
      return Promise.reject(error);
    }
  );

  // axios响应拦截器
  instance.interceptors.response.use(
    config => {},
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
}
