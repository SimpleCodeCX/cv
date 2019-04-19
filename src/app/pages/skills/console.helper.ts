import { SkillInfo } from '../../@dataSource';

/**
 * console log my skill list
 */
export function consoleSkills(skillList: Array<SkillInfo>) {
  let conStr = '\n%cWhat I can do?%c   ( 项目地址：https://github.com/SimpleCodeCX/cv & https://github.com/SimpleCodeCX/cv-server )\n\n';
  conStr += '**********************************************************\n';
  let conCss = ['color:red', 'color:black'];
  skillList.forEach(item => {
    if (item.description) {
      conStr += `%c${item.skillValue}%c:\n\n${item.description}\n\n`;
      conCss.push('color:red');
      conCss.push('color:black');
    }
  });
  conStr += '\n\n**********************************************************\n\n';
  console.log(conStr, ...conCss);
}