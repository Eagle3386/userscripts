// ==UserScript==
// @name        GMail Custom Fixed Font
// @namespace   https://mail.google.com
// @include     https://mail.google.com/*
// @icon        https://ssl.gstatic.com/ui/v1/icons/mail/favicon.ico
// @run-at      document-start
// @description Custom fixed-font in Gmail messages
// @version     1.4
// @author      Martin Baranski
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @grant       GM_addStyle
// @grant       GM.addStyle
// ==/UserScript==

const fontName = 'Source Code Pro';

// Dragons below this line ;-)
const fontCss = 'font-family: \'' + fontName + '\', monospace !important;';
let css = '.ii, .Ak {' + fontCss + '}';
css += '.editable {' + fontCss + '}';

const heads = document.getElementsByTagName('head');
if (heads.length > 0) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '//fonts.googleapis.com/css?family=' + fontName.replace(/\ /g, '+') + '&subset=latin';
  heads[0].appendChild(link);
  const node = document.createElement('style');
  node.type = 'text/css';
  node.appendChild(document.createTextNode(css));
  heads[0].appendChild(node);
}

if (typeof GM_addStyle != "undefined") {
  GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
  addStyle(css);
} else {
  if (heads.length > 0) {
    const node = document.createElement('style');
    node.type = 'text/css';
    node.appendChild(document.createTextNode(css));
    heads[0].appendChild(node);
  }
}
