declare var require;

let skillValueList = ['@Angular', 'Webpack', '性能优化', 'Node/Koa2', 'Restful', 'HTTP', 'Nginx',
  'Docker', 'Git', 'SCSS', 'Rxjs', 'ES5/6/7', 'Gulp',
  'Linux'];

const skillsArt = require('./skills.art');
const skillsHtml = skillsArt({ skillList: skillValueList });
document.getElementById('skills').innerHTML = skillsHtml;

