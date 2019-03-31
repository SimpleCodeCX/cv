import { skillService, SkillInfo } from '../../@dataSource';

let skillId = null;

export async function addSKill() {
  const skillInfo: SkillInfo = {
    skillValue: 'skillValueNew',
    description: 'descriptionNew'
  }
  const resData = await skillService.addSkill(skillInfo);
  if (resData.data.success) {
    skillId = resData.data.body.skillId;
  }
  console.log('addSKill: ', resData.data);
}

export async function getAllSkill() {
  const resData = await skillService.getAllSkill();
  if (!resData.data.success) {
    return [];
  }
  console.log('getAllSkill: ', resData.data);
  return resData.data.body;
}

export async function updateSkill() {
  const skillInfo: SkillInfo = {
    skillValue: 'skillValueNew2',
    description: 'descriptionNew2'
  }
  const resData = await skillService.updateBySkillId(skillId, skillInfo);
  console.log('updateSkill: ', resData.data);
}

export async function getBySkillId(skillId: number) {
  const resData = await skillService.getBySkillId(skillId);
  console.log('getBySkillId: ', resData.data);
}

export async function deleteBySkillId(skillId: number) {
  const resData = await skillService.deleteBySkillId(skillId);
  console.log('deleteBySkillId: ', resData.data);
}

async function main() {
  // await addSKill();
  // await getAllSkill();
  // await updateSkill();
  // await getBySkillId(skillId);
  // await deleteBySkillId(skillId);
}



