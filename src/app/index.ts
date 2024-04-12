import '../shared/styles/style.css'
import batteryIcon from '../shared/assets/svg/battery.svg'
import bluetoothIcon from '../shared/assets/svg/bluetooth.svg'
import crossIcon from '../shared/assets/svg/cross.svg'
import mobileSignalIcon from '../shared/assets/svg/mobile-signal.svg'
import wifiIcon from '../shared/assets/svg/wifi.svg'
import posterFirst from '../shared/assets/posters/f1.jpg'
// import { setupCounter } from '../counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header__container">
    <div class="header__system-bar header__system-bar_size-13">
      <div class="system-bar_left">
        <span>9:41</span>
      </div>
      <div class="system-bar_right">
        <img src="${mobileSignalIcon}" alt="mobile-signal" width="17.68" height="10.67">
        <img src="${wifiIcon}" alt="wifi" width="15.88" height="10.97">
        <img src="${batteryIcon}" alt="battery" width="25.48" height="10.50">
      </div>
    </div>
    <div class="header__system-bar header__system-bar_size-8">
      <div class="system-bar_left">
        <img src="${mobileSignalIcon}" alt="mobile-signal" width="16.50" height="10.00">
        <p>Sketch</p>
        <img src="${wifiIcon}" alt="wifi" width="14.34" height="10.00">
      </div>
      <div class="system-bar_center">
        <span>9:41 AM</span>
      </div>
      <div class="system-bar_right">
        <img src="${bluetoothIcon}" alt="bluetooth" width="6.00" height="10.00">
        <span>100%</span>
        <img src="${batteryIcon}" alt="battery" width="27.00" height="12.00">
      </div>
    </div>
  </header>

  <main class="main__container">
      <a href="#" class="main__container--cross">
        <img src="${crossIcon}" alt="cross" width="12.00" height="12.00">
      </a>

      <h1 class="main__container--title" id="title">Get Unlimited <br>Access</h1>
      
      <div class="main__container--gallery">
        <div class="gallery_poster-1">
          <img src="${posterFirst}" alt="poster-1">
          <h3 class="poster--title">Exclusive Styles</h3>
        </div>
        <div class="gallery_poster-2">
          <img src="${posterFirst}" alt="poster-2">
          <h3 class="poster--title">Exclusive Styles</h3>
        </div>
        <div class="gallery_poster-3">
          <img src="${posterFirst}" alt="poster-3">
          <h3 class="poster--title">Magic Avatars With 20% Off</h3>
        </div>
      </div>

      <div class="main__container--interaction">
        <button class="interaction_btn-1 active" data-href="https://apple.com/">
          <p class="btn__title td-1">YEARLY ACCESS</p>
          <p class="btn__subtitle td-1">Just $39.99 per year</p>
          <p class="btn__subtitle td-2">$0.48 <br/>per week</p>
          <span class="btn_note">BEST OFFER</span>
        </button>
        <button class="interaction_btn-2" data-href="https://google.com/">
          <p class="btn__title td-1">WEEKLY ACCESS</p>
          <p class="btn__subtitle td-2">$6.99 <br/>per week</p>
        </button>
        <button class="interaction_btn-submit" id="continue">Continue</button>
      </div>
  </main>

  <footer class="footer__container">
    <nav class="footer__nav">
      <ul class="footer__nav--ul">
        <li class="footer__ul--li">
          <a href="#" class="footer__li--link">Terms of Use</a>
        </li>
        <li class="footer__ul--li">
          <a href="#" class="footer__li--link">Privacy Policy</a>
        </li>
        <li class="footer__ul--li">
          <a href="#" class="footer__li--link">Restore</a>
        </li>
      </ul>
    </nav>
  </footer>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
