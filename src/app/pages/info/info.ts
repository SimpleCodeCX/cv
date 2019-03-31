declare var require;

const info = require('./info.art');
const infoHtml = info({});
document.getElementById('info').innerHTML = infoHtml;