// ==UserScript==
// @name        Google Calendar Colored Weekends
// @namespace   https://calendar.google.com
// @include     https://calendar.google.com/*
// @icon        https://calendar.google.com/googlecalendar/images/favicon_v2014_31.ico
// @run-at      document-start
// @description Emphasizes backgrounds of today and weekends in (mini) monthly view.
// @version     2.3
// @author      Martin Arndt
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     EUPL, Version 1.2 only
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  const miniView = 'span.elYzab-DaY83b-ppHlrf';
  const miniViewHead = 'span.SoBqBf';
  const monthView = 'div.elYzab-cXXICe-Hjleke';
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(monthView + ':nth-child(6), ' + miniView + ':nth-child(7), ' + miniViewHead + ':nth-child(7) { background-color: #F4F4F4; }'));
  style.appendChild(document.createTextNode(monthView + ':nth-child(7), ' + miniView + ':nth-child(8), ' + miniViewHead + ':nth-child(8) { background-color: #EDEDED; }'));
  style.appendChild(document.createTextNode('.ef2wWc { background-color: #DB4437 !important; }'));
  document.getElementsByTagName('head')[0].appendChild(style);
})();
