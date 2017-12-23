// ==UserScript==
// @name        Google Calendar Colored Weekends 2.0 (Fall 2017)
// @namespace   https://calendar.google.com
// @include     https://calendar.google.com/*
// @icon        https://calendar.google.com/googlecalendar/images/favicon_v2014_31.ico
// @run-at      document-start
// @description Emphasizes background of weekends in monthly view.
// @version     2.0
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // Column headers (i. e. day's title)
  GM_addStyle(".PhLhOd.elYzab-cXXICe-Hjleke:nth-child(6) { background-color: #F2F2F2; }");
  GM_addStyle(".PhLhOd.elYzab-cXXICe-Hjleke:nth-child(7) { background-color: #F0F0F0; }");

  // Column cells (i. e. day's content)
  GM_addStyle(".t8qpF.elYzab-cXXICe-Hjleke:nth-child(6) { background-color: #F2F2F2; }");
  GM_addStyle(".t8qpF.elYzab-cXXICe-Hjleke:nth-child(7) { background-color: #F0F0F0; }");

  // Highlight today differently
  GM_addStyle(".t8qpF.elYzab-cXXICe-Hjleke.ef2wWc { background-color: #DB4437; }");
})();
