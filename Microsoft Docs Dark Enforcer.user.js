// ==UserScript==
// @name        Microsoft Docs Dark Enforcer
// @namespace   /^https?://(docs|learn)\.microsoft\.com/\w{2}-\w{2}/$
// @include     /^https?://(docs|learn)\.microsoft\.com/\w{2}-\w{2}/.*$
// @icon        https://www.microsoft.com/favicon.ico
// @run-at      document-start
// @description Enforce dark theme, even when reset by browser privacy add-ons clearing local/session storage.
// @version     1.3
// @author      Martin Arndt
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     EUPL, Version 1.2 only
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
      if (!document.documentElement.classList.contains("theme-dark")) {
        document.documentElement.classList.add("theme-dark");
      }
    }
  });
})();
