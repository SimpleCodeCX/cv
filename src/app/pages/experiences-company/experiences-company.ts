declare var require;

const experiencesCompany = require('./experiences-company.art');
const experiencesCompanyHtml = experiencesCompany({});
document.getElementById('experiences-company').innerHTML = experiencesCompanyHtml;