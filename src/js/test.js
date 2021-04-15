// 判斷瀏覽器是否支援 Service Workers
if('serviceWorker' in navigator) {
    // 註冊 Service Workers
    // register 是支援 Promise
    navigator.serviceWorker.register('sw.js')
      .then((messages)) => {
          console.log('Service worker 註冊');
      }).cathe((error) => {
        console.log(error);
      });
  }
  