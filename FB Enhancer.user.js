// ==UserScript==
// @name        Facebook Enhancer
// @namespace   https://www.facebook.com/checkpoint
// @include     https://www.facebook.com/checkpoint/?next*
// @icon        https://external-content.duckduckgo.com/ip3/www.facebook.com.ico
// @run-at      document-end
// @description Always checks "Don't save" to *not* skip 2FA upon login
// @version     1.3
// @author      Martin Arndt
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     EUPL, Version 1.2 only
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  if (!document.getElementById('u_0_3').checked) {
    document.getElementById('u_0_3').checked = true;
  }
})();
