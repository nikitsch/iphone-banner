export function OptionSecond(): string {
  return `    
    <button class="second-option-btn btn option-btn" id="option-2" data-href="https://google.com/">
      <div class="left-btn-align">
        <p class="btn-title" data-i18n="WEEKLY ACCESS">WEEKLY ACCESS</p>
      </div>
      <div class="right-btn-align">
        <p class="btn-subtitle" data-i18n="{{price}} <br>per week" data-price="$6.99">$6.99 <br/>per week</p>
      </div>
    </button>
  `;
}