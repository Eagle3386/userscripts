// ==UserScript==
// @name        Google Search Privacy Enforcer
// @namespace   /^https?://(www|encrypted)\.google\.[a-z\.]{2,5}/search$/
// @include     /^https?://(www|encrypted)\.google\.[a-z\.]{2,5}/search.*$/
// @icon        https://www.google.com/favicon.ico
// @run-at      document-start
// @description Enforces search privacy by removing link tracking.
// @version     1.2
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     GPL v2.0
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
      event.target.querySelectorAll('h3.r > a').forEach(function(link) {
        for (var i = 0; i < link.attributes.length; i++) {
          if (link.attributes[i].name !== "href") {
            link.attributes.removeNamedItem(link.attributes[i].name);
          }
        }

        var url = link.attributes[0].value;
        link.attributes[0].value = url.slice(url.indexOf('http'), url.indexOf('&amp;usg='));
      });
    }
  });
})();
