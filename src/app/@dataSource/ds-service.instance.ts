import { DsHttpClient } from './http';
import { SkillApi } from './api';
import { SkillService } from './services';
export const dsHttpClient = new DsHttpClient();


export const skillApi = new SkillApi(dsHttpClient);
export const skillService = new SkillService(skillApi);