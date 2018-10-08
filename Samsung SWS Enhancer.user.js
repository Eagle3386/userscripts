// ==UserScript==
// @name        Samsung SyncThru Webservice (SWS) Enhancer
// @namespace   /^https?://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/sws/index.html$/
// @include     /^https?://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/sws/index.html$/
// @icon        https://lh3.googleusercontent.com/gUukYHEJnsm8r3P3XkVOOKZ4Mb7HwyG1ixaq4h7Rsd7s9AgrMuDsq3OBpKrvJyvYIA
// @run-at      document-start
// @description Fixes improper height/width values of toner/paper tray panel
// @version     1.3
// @author      Martin Arndt
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     EUPL, Version 1.2 only
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  // Panel heights
  style.appendChild(document.createTextNode('#ext-gen332, #ext-gen376 { height: 124px !important; }'));
  style.appendChild(document.createTextNode('#ext-gen428 { height: 73px !important; }'));

  // Toner panel - first/last column
  style.appendChild(document.createTextNode('#ext-gen355 .x-grid3-td-name, #ext-gen350 .x-grid3-td-name, #ext-gen355 .x-grid3-td-2, #ext-gen350 .x-grid3-td-2 { width: 95px !important; }'));

  // Paper tray panel columns
  style.appendChild(document.createTextNode('#ext-gen399 .x-grid3-td-name, #ext-gen394 .x-grid3-td-name { width: 135px !important; }'));
  style.appendChild(document.createTextNode('#ext-gen399 .x-grid3-td-1, #ext-gen394 .x-grid3-td-1 { width: 95px !important; }'));
  style.appendChild(document.createTextNode('#ext-gen399 .x-grid3-td-2, #ext-gen394 .x-grid3-td-2 { width: 100px !important; }'));
  style.appendChild(document.createTextNode('#ext-gen399 .x-grid3-td-3, #ext-gen394 .x-grid3-td-3 { width: 80px !important; }'));
  document.getElementsByTagName('head')[0].appendChild(style);
})();
