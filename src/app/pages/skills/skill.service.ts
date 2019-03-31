import { skillService, SkillInfo } from '../../@dataSource';


export async function getAllSkill(): Promise<Array<SkillInfo>> {
  const resData = await skillService.getAllSkill();
  if (!resData.data.success) {
    return [];
  }
  console.log('getAllSkill: ', resData.data);
  return resData.data.body;
}

