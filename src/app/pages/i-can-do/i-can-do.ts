declare var require;

const iCanDo = require('./i-can-do.art');
const iCanDoHtml = iCanDo({});
document.getElementById('i-can-do').innerHTML = iCanDoHtml;