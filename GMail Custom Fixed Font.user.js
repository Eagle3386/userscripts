// ==UserScript==
// @name        GMail Custom Fixed Font
// @namespace   https://mail.google.com
// @include     https://mail.google.com/*
// @icon        https://ssl.gstatic.com/ui/v1/icons/mail/favicon.ico
// @run-at      document-start
// @description Custom fixed-font in GMail messages
// @version     1.8
// @author      Marcin Rataj (original), Martin Arndt (tweaks)
// @homepageURL https://github.com/Eagle3386/userscripts
// @license     CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @grant       none
// ==/UserScript==

const font = 'Source Code Variable';

// Dragons below this line ;-)
const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '//fonts.googleapis.com/css?family=' + font.replace(/\ /g, '+') + '&subset=latin';
head.appendChild(link);

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode('.editable { font-family: \'' + font + '\', monospace !important; }'));
head.appendChild(style);
