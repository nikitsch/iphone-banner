import batteryIcon from '../shared/assets/svg/battery.svg'
import bluetoothIcon from '../shared/assets/svg/bluetooth.svg'
import mobileSignalIcon from '../shared/assets/svg/mobile-signal.svg'
import wifiIcon from '../shared/assets/svg/wifi.svg'

export function Header(): string {
  return `
    <header class="header">
      <div class="system-bar bar-13">
        <div class="bar-left">
          <span class="left-time">9:41</span>
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
  `;
}