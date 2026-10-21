// loadFonts.js — switches the Google Fonts stylesheet from print → all
// after the page has loaded, making the font non-render-blocking.
// Served as a static file so CSP script-src 'self' covers it — no unsafe-inline needed.
(function () {
  var link = document.getElementById('gfonts');
  if (!link) return;
  if (document.readyState === 'complete') {
    link.media = 'all';
  } else {
    window.addEventListener('load', function () { link.media = 'all'; });
  }
})();
