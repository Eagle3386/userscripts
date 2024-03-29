// ==UserScript==
// @name        Microsoft Websites EN-US Enforcer
// @namespace   /^https?://(developer|docs|learn|msdn|technet|support|www)\.(microsoft|office|visualstudio)\.com/$
// @include     /^https?://(developer|docs|learn|msdn|technet|support|www)\.(microsoft|office|visualstudio)\.com/.*$
// @icon        https://www.microsoft.com/favicon.ico
// @run-at      document-start
// @description Redirect to US-English versions of Microsoft websites, except when non-EN-US is enforced.
// @version     2.5
// @author      RoundRobin (original), Martin Arndt (improvement)
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     EUPL, Version 1.2 only
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  if (/\/(\w{2}-\w{2})\//.test(window.location.pathname)
      && window.location.pathname.indexOf('/en-us/') == -1
      && window.location.search.indexOf('lang=force') == -1) {
    window.location.pathname = window.location.pathname.replace(/\/(\w{2}-\w{2})\//, '/en-us/');
  }
})();
