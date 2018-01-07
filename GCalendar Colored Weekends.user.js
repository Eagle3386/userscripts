// ==UserScript==
// @name        Google Calendar Colored Weekends (Fall 2017)
// @namespace   https://calendar.google.com
// @include     https://calendar.google.com/*
// @icon        https://calendar.google.com/googlecalendar/images/favicon_v2014_31.ico
// @run-at      document-start
// @description Emphasizes background of weekends in monthly view.
// @version     2.1
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode('.elYzab-cXXICe-Hjleke:nth-child(6) { background-color: #F4F4F4; }'));
  style.appendChild(document.createTextNode('.elYzab-cXXICe-Hjleke:nth-child(7) { background-color: #EDEDED; }'));
  style.appendChild(document.createTextNode('.ecKr0, .ef2wWc { background-color: #DB4437 !important; }')); // Today
  document.getElementsByTagName('head')[0].appendChild(style);
})();
