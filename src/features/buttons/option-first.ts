export function OptionFirst(): string {
  return `    
      <button class="first-option-btn btn active option-btn" id="option-1" data-href="https://apple.com/">
        <div class="left-btn-align">
          <p class="btn-title" data-i18n="YEARLY ACCESS">YEARLY ACCESS</p>
          <p class="btn-subtitle" data-i18n="Just {{price}} per year" data-price="$39.99">Just $39.99 per year</p>
        </div>
        <div class="right-btn-align">
          <p class="btn-subtitle" data-i18n="{{price}} <br>per week" data-price="$0.48">$0.48 <br/>per week</p>
        </div>
        <span class="btn-note" data-i18n="BEST OFFER">BEST OFFER</span>
      </button>
  `;
}