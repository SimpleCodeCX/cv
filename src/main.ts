import './assets/styles/main.scss';
import 'fullpage.js/dist/jquery.fullpage.css';
const fullpage = require('fullpage.js');
import * as $ from 'jquery';
import babelPolyfill from 'babel-polyfill';
import './app/app';


declare var require;
// import fullpage from 'fullpage.js';
$('#fullpage').fullpage({
  navigation: true,
  navigationPosition: "right"
});



