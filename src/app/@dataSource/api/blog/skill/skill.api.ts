import { DsHttpClient } from '../../../http/ds-http-client';
import { APITREE } from '../../api-tree';
import { AxiosRequestConfig } from 'axios';
import { SkillInfo } from './types';
const APIHOST = APITREE;

export class SkillApi {

  constructor(private dsHttp: DsHttpClient) { }

  /**
   * 获取所有的 skill
   */
  getAllSkill(options?: AxiosRequestConfig) {
    const url = `${APIHOST.api.v1.blog.skill._this}`;
    return this.dsHttp.dsGet(url, options);
  }

  /**
   * 根据 skillId 获取 skill
   */
  getBySkillId(skillId: number, options?: AxiosRequestConfig) {
    const url = `${APIHOST.api.v1.blog.skill._this}/${skillId}`;
    return this.dsHttp.dsGet(url, options);
  }

  /**
   * 添加 skill
   */
  addSkill(skillInfo: SkillInfo, options?: AxiosRequestConfig) {
    const url = `${APIHOST.api.v1.blog.skill._this}`;
    return this.dsHttp.dsPost(url, skillInfo, options);
  }

  /**
   * 修改 id 为 skillId 的 skill 信息
   */
  updateBySkillId(skillId: number, skillInfo: SkillInfo, options?: AxiosRequestConfig) {
    const url = `${APIHOST.api.v1.blog.skill._this}/${skillId}`;
    return this.dsHttp.dsPut(url, skillInfo, options);
  }

  /**
   * 删除 id 为 skillId 的 skill 
   */
  deleteBySkillId(skillId: number, options?: AxiosRequestConfig) {
    const url = `${APIHOST.api.v1.blog.skill._this}/${skillId}`;
    return this.dsHttp.dsDelete(url, options);
  }

}

