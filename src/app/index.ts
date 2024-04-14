import '../shared/styles/style.css'
import '../shared/styles/reset.css'
import batteryIcon from '../shared/assets/svg/battery.svg'
import bluetoothIcon from '../shared/assets/svg/bluetooth.svg'
import crossIcon from '../shared/assets/svg/cross.svg'
import mobileSignalIcon from '../shared/assets/svg/mobile-signal.svg'
import wifiIcon from '../shared/assets/svg/wifi.svg'
import posterFirst1xWebp from '../shared/assets/posters/poster-1.webp'
import posterFirst2xWebp from '../shared/assets/posters/poster-1@2x.webp'
import posterFirst3xWebp from '../shared/assets/posters/poster-1@3x.webp'
import posterSecond1xWebp from '../shared/assets/posters/poster-2.webp'
import posterSecond2xWebp from '../shared/assets/posters/poster-2@2x.webp'
import posterSecond3xWebp from '../shared/assets/posters/poster-2@3x.webp'
import posterThird1xWebp from '../shared/assets/posters/poster-3.webp'
import posterThird2xWebp from '../shared/assets/posters/poster-3@2x.webp'
import posterThird3xWebp from '../shared/assets/posters/poster-3@3x.webp'
// import { setupCounter } from '../counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="common-wrapper">
  <header class="header">
    <div class="system-bar bar-13">
      <div class="bar-left">
        <span>9:41</span>
      </div>
      <div class="bar-right">
        <img src="${mobileSignalIcon}" alt="mobile-signal">
        <img src="${wifiIcon}" alt="wifi">
        <img src="${batteryIcon}" alt="battery">
      </div>
    </div>
    <div class="bar-8">
      <div class="system-bar bar-8-wrapper">
        <div class="bar-left">
          <img class="svg-8-ms" src="${mobileSignalIcon}" alt="mobile-signal">
          <span class="sketch-8">Sketch</span>
          <img class="svg-8-wf" src="${wifiIcon}" alt="wifi">
        </div>
        <div class="bar-center">
          <span>9:41 AM</span>
        </div>
        <div class="bar-right">
          <img class="svg-8-bt" src="${bluetoothIcon}" alt="bluetooth">
          <span class="percent-8">100%</span>
          <img class="svg-8-ba" src="${batteryIcon}" alt="battery">
        </div>
      </div>
    </div>
  </header>

  <main class="main container">
      <a href="#" class="closing-action">
        <img src="${crossIcon}" alt="cross">
      </a>

      <h1 class="main-title">Get Unlimited <br>Access</h1>
      
      <section class="poster-gallery">
        <article class="poster">
          <img src="${posterFirst1xWebp}" srcset="${posterFirst2xWebp} 2x, ${posterFirst3xWebp} 3x" alt="poster-1">
          <h3 class="poster-title">Unlimited Art <br>Creation</h3>
          </article>
          <article class="poster">
          <img src="${posterSecond1xWebp}" srcset="${posterSecond2xWebp} 2x, ${posterSecond3xWebp} 3x" alt="poster-2">
          <h3 class="poster-title">Exclusive Styles</h3>
        </article>
        <article class="poster">
          <img src="${posterThird1xWebp}" srcset="${posterThird2xWebp} 2x, ${posterThird3xWebp} 3x" alt="poster-3">
          <h3 class="poster-title">Magic Avatars With 20% Off</h3>
        </article>
      </section>

      <section class="interaction">
        <button class="first-option-btn btn active option-btn" data-href="https://apple.com/">
          <div class="left-btn-align">
            <p class="btn-title">YEARLY ACCESS</p>
            <p class="btn-subtitle">Just $39.99 per year</p>
          </div>
          <div class="right-btn-align">
            <p class="btn-subtitle">$0.48 <br/>per week</p>
          </div>
          <span class="btn-note">BEST OFFER</span>
        </button>
        <button class="second-option-btn btn option-btn" data-href="https://google.com/">
          <div class="left-btn-align">
            <p class="btn-title">WEEKLY ACCESS</p>
          </div>
          <div class="right-btn-align">
            <p class="btn-subtitle">$6.99 <br/>per week</p>
          </div>
        </button>
        <button class="submit-btn btn">Continue</button>
      </section>
  </main>

  <footer class="footer">
    <nav class="navigation">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" class="nav-link">Terms of Use</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Privacy Policy</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Restore</a>
        </li>
      </ul>
    </nav>
  </footer>
</div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
