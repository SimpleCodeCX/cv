declare var require;

let skillValueList = ['@Angular', 'Webpack', '性能优化', 'Node/Koa2', 'Restful', 'HTTP', 'Nginx',
  'Docker', 'Git', 'SCSS', 'Rxjs', 'ES5/6/7', 'Gulp',
  'Linux'];

const skillsArt = require('./skills.art');
const skillsHtml = skillsArt({ skillList: skillValueList });
document.getElementById('skills').innerHTML = skillsHtml;

setTimeout(async () => {

  const skillService = await import('./skill.service');
  const consoleHelper = await import('./console.helper');

  const skillListServer = await skillService.getAllSkill();
  // 控制台打印我的 skill list
  consoleHelper.consoleSkills(skillListServer);

}, 1000);

