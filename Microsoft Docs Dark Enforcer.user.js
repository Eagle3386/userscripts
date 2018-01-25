// ==UserScript==
// @name        Microsoft Docs Dark Enforcer
// @namespace   /^https?://docs\.microsoft\.com/\w{2}-\w{2}/$
// @include     /^https?://docs\.microsoft\.com/\w{2}-\w{2}/.*$
// @icon        https://www.microsoft.com/favicon.ico
// @run-at      document-start
// @description Enforce dark theme, even when reset by browser privacy add-ons clearing local/session storage.
// @version     1.0
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
      var selector = event.target.getElementById('theme-selector');
      for (var i = 0; i < selector.options.length; i++) {
        if (selector.options[i].value === 'theme_night') {
          selector.selectedIndex = i;
          break;
        }
      }
      selector.dispatchEvent(new Event('change', {
        "bubbles": true, "cancelable": true, "composed": false
      }));
    }
  });
})();
