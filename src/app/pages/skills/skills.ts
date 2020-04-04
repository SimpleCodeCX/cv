declare var require;

let skillValueList = ['扎实的javascript基础', 'React(阅读过相关源码)', 'Node/Koa2(阅读过源码)', 'Webpack', 'typescript', '性能优化', 'Restful', 'Nginx',
  'Docker', 'Git', 'SCSS'];

const skillsArt = require('./skills.art');
const skillsHtml = skillsArt({ skillList: skillValueList });
document.getElementById('skills').innerHTML = skillsHtml;

setTimeout(async () => {

  const skillService = await import('./skill.service');
  const consoleHelper = await import('./console.helper');

  const skillListServer = await skillService.getAllSkill();

  skillValueList = skillListServer && skillListServer.map(item => item['skillValue']) || skillValueList;

  const skillsHtml = skillsArt({ skillList: skillValueList });
  // document.getElementById('skills').innerHTML = skillsHtml;

  // 控制台打印我的 skill list
  skillListServer && consoleHelper.consoleSkills(skillListServer);

}, 1000);

