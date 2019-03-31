import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export class DsHttpClient {

  /**
   * http get
   */
  async dsGet(url: string, options?: AxiosRequestConfig) {
    let result;
    try {
      result = await axios.get(url, options);
    } catch (e) {
      console.error(e);
      // 当服务器出错就会进入这里，暂时这么处理
      result = {};
    }
    return result;
  }

  /**
   * http post
   */
  async dsPost(url: string, body: any | null, options?: AxiosRequestConfig) {
    let result;
    try {
      result = await axios.post(url, body, options);
    } catch (e) {
      console.error(e);
      result = {};
    }
    return result;
  }

  /**
   * http put
   */
  async dsPut(url: string, body: any | null, options?: AxiosRequestConfig) {
    let result;
    try {
      result = await axios.put(url, body, options);
    } catch (e) {
      console.error(e);
      result = {};
    }
    return result;
  }

  /**
   * http delete
   */
  async dsDelete(url: string, options?: AxiosRequestConfig) {
    let result;
    try {
      result = await axios.delete(url, options);
    } catch (e) {
      console.error(e);
      result = {};
    }
    return result;
  }

}
