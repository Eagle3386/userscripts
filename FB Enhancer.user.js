// ==UserScript==
// @name        Facebook Enhancer
// @namespace   https://www.facebook.com/checkpoint
// @include     https://www.facebook.com/checkpoint/?next
// @icon        https://www.facebook.com/favicon.ico
// @run-at      document-end
// @description Always checks "Don't save" to *not* skip 2FA upon login
// @version     1.0
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  if (!document.getElementById('u_0_3').checked) {
    document.getElementById('u_0_3').checked = true;
  }
})();
