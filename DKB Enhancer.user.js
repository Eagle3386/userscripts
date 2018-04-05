// ==UserScript==
// @name        DKB Enhancer
// @namespace   https://www.dkb.de/banking/finanzstatus/kontoumsaetze
// @include     https://www.dkb.de/banking/finanzstatus/kontoumsaetze*
// @icon        https://www.dkb.de/favicon.ico
// @run-at      document-end
// @description Always shows daily balance diagram
// @version     1.3
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  if (jQuery('#dailyBalanceDiagram').is(':hidden')) {
    Abaxx.dkb_paymenttransaction.toggleDailyBalanceDiagram();
  }
})();
