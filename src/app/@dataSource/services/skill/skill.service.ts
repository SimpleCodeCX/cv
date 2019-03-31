import { SkillApi, SkillInfo } from '../../api';
import { AxiosRequestConfig } from 'axios';

export class SkillService {

  constructor(private skillApi: SkillApi) { }

  /**
   * 获取所有的 skill
   */
  getAllSkill(options?: AxiosRequestConfig) {
    return this.skillApi.getAllSkill(options);
  }

  /**
   * 添加 skill
   */
  getBySkillId(skillId: number, options?: AxiosRequestConfig) {
    return this.skillApi.getBySkillId(skillId, options);
  }

  /**
   * 添加 skill
   */
  addSkill(skillInfo: SkillInfo, options?: AxiosRequestConfig) {
    return this.skillApi.addSkill(skillInfo, options);
  }

  /**
   * 修改 id 为 skillId 的 skill 信息
   */
  updateBySkillId(skillId: number, skillInfo: SkillInfo, options?: AxiosRequestConfig) {
    return this.skillApi.updateBySkillId(skillId, skillInfo, options);
  }

  /**
   * 删除 id 为 skillId 的 skill 
   */
  deleteBySkillId(skillId: number, options?: AxiosRequestConfig) {
    return this.skillApi.deleteBySkillId(skillId, options);
  }


}
