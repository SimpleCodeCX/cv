declare var require;

let skillValueList = ['@Angular', 'React', 'Webpack', '性能优化', 'Node/Koa2', 'Restful', 'Nginx',
  'Docker', 'Git', 'SCSS', 'Linux'];

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

