// ==UserScript==
// @name        DKB Enhancer
// @namespace   https://www.dkb.de/banking/finanzstatus/kontoumsaetze
// @include     https://www.dkb.de/banking/finanzstatus/kontoumsaetze*
// @icon        https://www.dkb.de/favicon.ico
// @run-at      document-start
// @description Always shows daily balance diagram
// @version     1.0
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle("#dailyBalanceDiagram { display: block !important; }");
})();
