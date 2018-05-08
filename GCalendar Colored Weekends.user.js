// ==UserScript==
// @name        Google Calendar Colored Weekends
// @namespace   https://calendar.google.com
// @include     https://calendar.google.com/*
// @icon        https://calendar.google.com/googlecalendar/images/favicon_v2014_31.ico
// @run-at      document-start
// @description Emphasizes backgrounds of today and weekends in (mini) monthly view.
// @version     2.2
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     EUPL, Version 1.2 only
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode('div.elYzab-cXXICe-Hjleke:nth-child(6), span.elYzab-DaY83b-ppHlrf:nth-child(7) { background-color: #F4F4F4; }'));
  style.appendChild(document.createTextNode('div.elYzab-cXXICe-Hjleke:nth-child(7), span.elYzab-DaY83b-ppHlrf:nth-child(8) { background-color: #EDEDED; }'));
  style.appendChild(document.createTextNode('.ef2wWc { background-color: #DB4437 !important; }'));
  document.getElementsByTagName('head')[0].appendChild(style);
})();
