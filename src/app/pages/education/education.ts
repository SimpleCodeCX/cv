declare var require;

const education = require('./education.art');
const educationHtml = education({});
document.getElementById('education').innerHTML = educationHtml;