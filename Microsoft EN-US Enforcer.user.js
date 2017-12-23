// ==UserScript==
// @name        Microsoft Websites EN-US Enforcer
// @namespace   https://microsoft.com/
// @include     /^https?://(developer|docs|msdn|technet|support)\.(microsoft|office)\.com/.*$
// @icon        https://www.microsoft.com/favicon.ico
// @run-at      document-start
// @description Redirect to US-English versions of Microsoft websites, except when non-EN-US is enforced.
// @version     2.0
// @author      RoundRobin (original), Martin Baranski (improvement)
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// ==/UserScript==

if (/\/(\w{2}-\w{2})\//.test(window.location.pathname)
    && !window.location.pathname.startsWith('/en-us')
    && window.location.search.indexOf("language=force") == -1) {
  window.location.pathname = window.location.pathname.replace(/\/(\w{2}-\w{2})\//, "/en-us/");
}
