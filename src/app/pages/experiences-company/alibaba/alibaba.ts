declare var require;

const alibaba = require('./alibaba.art');
const alibabaHtml = alibaba({});
document.getElementById('alibaba').innerHTML = alibabaHtml;