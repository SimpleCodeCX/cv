declare var require;

const desaySV = require('./desay-sv.art');
const desaySVHtml = desaySV({});
document.getElementById('desay-sv').innerHTML = desaySVHtml;