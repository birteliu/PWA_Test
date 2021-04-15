$(document).ready(function () {
    // 判斷瀏覽器是否支援 Service Workers
    if ('serviceWorker' in navigator) {
      // register 是支援 Promise 的
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
      });
    }
  });