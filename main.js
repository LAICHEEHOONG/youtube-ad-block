
console.log('Kill Youtube AD  1.8')


const removeAdClass = () => {
  const adClass = document.querySelector('.ad-created');
  if (adClass !== null) {
    adClass.classList.remove('ad-created')

    // console.log('remove class ad-create')

  }
}



const clickClose = () => {
  const closeBtn = document.querySelector('.ytp-ad-overlay-close-button');
  if (closeBtn !== null) {
    closeBtn.click();
    // console.log('close overlay')
  }
}

const clickSkip = () => {
  const skipBtn = document.querySelector('.ytp-ad-skip-button');
  if (skipBtn !== null) {
    skipBtn.click();
    console.log('click skip')
  }
}

const stopDuration = async () => {
  try {
    if (document.querySelector('.ad-showing') !== null && document.querySelector('video') !== null) {
      let video = document.querySelector('video');
  
      video.currentTime = video.duration;
      console.log('stop duration')
    }
  } catch(err) {
    console.log(err);
    location.reload();
  }

}




  setInterval(async () => {
    removeAdClass();
    await stopDuration();
    clickClose();
    clickSkip();
  
  }, 1000)






// const clear = (() => {
//   const defined = v => v !== null && v !== undefined;
//   const timeout = setInterval(() => {
//       const ad = [...document.querySelectorAll('.ad-showing')][0];
//       if (defined(ad)) {
//           const video = document.querySelector('video');
//           if (defined(video)) {
//               video.currentTime = video.duration;
//           }
//       }
//   }, 500);
//   return function() {
//       clearTimeout(timeout);
//   }
// })();
// clear();