(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const f="data:image/svg+xml,%3csvg%20width='26'%20height='11'%20viewBox='0%200%2026%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23.3199%202.5C23.3199%201.11929%2022.2007%200%2020.8199%200H2.93994C1.55923%200%200.439941%201.11929%200.439941%202.5V8C0.439941%209.38071%201.55923%2010.5%202.93994%2010.5H19.6474H20.8199C22.2007%2010.5%2023.3199%209.38071%2023.3199%208V2.5ZM22.2799%203C22.2799%201.89543%2021.3845%201%2020.2799%201H3.47995C2.37538%201%201.47995%201.89543%201.47995%203V7.5C1.47995%208.60457%202.37538%209.5%203.47995%209.5H18.6074H20.2799C21.3845%209.5%2022.2799%208.60457%2022.2799%207.5V3Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.3599%207.374C25.257%207.15198%2025.9199%206.36893%2025.9199%205.437C25.9199%204.50507%2025.257%203.72201%2024.3599%203.5V7.374Z'%20fill='white'/%3e%3cpath%20d='M3.52002%202C2.96774%202%202.52002%202.44772%202.52002%203V7.5C2.52002%208.05228%202.96773%208.5%203.52002%208.5H20.24C20.7923%208.5%2021.24%208.05228%2021.24%207.5V3C21.24%202.44772%2020.7923%202%2020.24%202H3.52002Z'%20fill='white'/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20width='8'%20height='14'%20viewBox='0%200%208%2014'%20fill='none'%20stroke-width='1.2px'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.5%204L6.5%209.5L3.5%2012V2L6.5%204.5L0.5%2010'%20stroke='white'/%3e%3c/svg%3e",x="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.01053%206.59968L12.4165%201.19368L12.8144%201.59155L7.4084%206.99754L13%2012.5892L12.5892%2013L6.99754%207.4084L1.59155%2012.8144L1.19368%2012.4165L6.59968%207.01053L1%201.41085L1.41085%201L7.01053%206.59968Z'%20stroke='white'%20stroke-opacity='0.4'%20stroke-linejoin='round'/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20width='19'%20height='12'%20viewBox='0%200%2019%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.0931%201.66663C18.0931%201.11434%2017.6275%200.666626%2017.0531%200.666626H16.0131C15.4387%200.666626%2014.9731%201.11434%2014.9731%201.66663V10.3333C14.9731%2010.8856%2015.4387%2011.3333%2016.0131%2011.3333H17.0531C17.6275%2011.3333%2018.0931%2010.8856%2018.0931%2010.3333V1.66663ZM12.1998%203C12.7742%203%2013.2398%203.44772%2013.2398%204V10.3333C13.2398%2010.8856%2012.7742%2011.3333%2012.1998%2011.3333H11.1598C10.5854%2011.3333%2010.1198%2010.8856%2010.1198%2010.3333V4C10.1198%203.44772%2010.5854%203%2011.1598%203H12.1998ZM8.38638%206.33325C8.38638%205.78097%207.92076%205.33325%207.34637%205.33325H6.30637C5.73199%205.33325%205.26636%205.78097%205.26636%206.33325V10.3333C5.26636%2010.8855%205.73199%2011.3333%206.30637%2011.3333H7.34637C7.92076%2011.3333%208.38638%2010.8855%208.38638%2010.3333V6.33325ZM3.53308%208.33325C3.53308%207.78097%203.06746%207.33325%202.49308%207.33325H1.45308C0.878709%207.33325%200.413086%207.78097%200.413086%208.33325V10.3333C0.413086%2010.8855%200.878709%2011.3333%201.45308%2011.3333H2.49308C3.06746%2011.3333%203.53308%2010.8855%203.53308%2010.3333V8.33325Z'%20fill='white'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='17'%20height='12'%20viewBox='0%200%2017%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.4545%204.98635C14.5802%205.10422%2014.7813%205.10274%2014.9051%204.98301L16.1074%203.81635C16.1701%203.75563%2016.2051%203.67337%2016.2046%203.58779C16.204%203.50221%2016.1681%203.42036%2016.1046%203.36035C11.7209%20-0.679198%204.80511%20-0.679198%200.421412%203.36035C0.357912%203.42032%200.321882%203.50214%200.321296%203.58772C0.320711%203.67331%200.355618%203.75558%200.418292%203.81635L1.62088%204.98301C1.74467%205.10292%201.94585%205.1044%202.07155%204.98635C3.74194%203.45945%205.9586%202.60801%208.26336%202.60802C10.5679%202.60811%2012.7843%203.45955%2014.4545%204.98635ZM11.6892%207.67338C11.8161%207.78936%2012.0161%207.78684%2012.1399%207.66771L13.3407%206.50104C13.4039%206.43985%2013.439%206.35683%2013.4381%206.27057C13.4372%206.1843%2013.4004%206.10199%2013.3359%206.04204C10.4777%203.48566%206.05154%203.48566%203.19341%206.04204C3.12885%206.10199%203.09202%206.18434%203.09117%206.27064C3.09032%206.35693%203.12554%206.43994%203.18891%206.50104L4.38942%207.66771C4.51316%207.78684%204.71314%207.78936%204.84008%207.67338C5.77803%206.85671%206.99807%206.40421%208.26342%206.40371C9.52961%206.40364%2010.7506%206.85617%2011.6892%207.67338ZM10.5614%208.73104C10.6282%208.78907%2010.667%208.87102%2010.6689%208.95752C10.6707%209.04403%2010.6353%209.12743%2010.5711%209.18804L8.4939%2011.2037C8.43301%2011.2629%208.34999%2011.2963%208.26337%2011.2963C8.17674%2011.2963%208.09372%2011.2629%208.03283%2011.2037L5.95526%209.18804C5.89108%209.12739%205.85577%209.04396%205.85768%208.95745C5.85958%208.87094%205.89852%208.78903%205.96531%208.73104C7.29191%207.65215%209.23482%207.65215%2010.5614%208.73104Z'%20fill='white'/%3e%3c/svg%3e",_="/assets/poster-1-Ddu94DJW.webp",S="/assets/poster-1@2x-CBdo3xJm.webp",A="/assets/poster-1@3x-Bi6rHf0F.webp",H="/assets/poster-2-Bd8byzrF.webp",I="/assets/poster-2@2x-yGHPnZLL.webp",P="/assets/poster-2@3x-2QP9M1BE.webp",$="/assets/poster-3-B1NMBoUp.webp",k="/assets/poster-3@2x-CI7lUp57.webp",B="/assets/poster-3@3x-vTKLdnzE.webp";document.querySelector("#app").innerHTML=`
<div class="common-wrapper">
  <header class="header">
    <div class="system-bar bar-13">
      <div class="bar-left">
        <span class="left-time">9:41</span>
      </div>
      <div class="bar-right">
        <img src="${h}" alt="mobile-signal">
        <img src="${b}" alt="wifi">
        <img src="${f}" alt="battery">
      </div>
    </div>
    <div class="bar-8">
      <div class="system-bar bar-8-wrapper">
        <div class="bar-left">
          <img class="svg-8-ms" src="${h}" alt="mobile-signal">
          <span class="sketch-8">Sketch</span>
          <img class="svg-8-wf" src="${b}" alt="wifi">
        </div>
        <div class="bar-center">
          <span>9:41 AM</span>
        </div>
        <div class="bar-right">
          <img class="svg-8-bt" src="${E}" alt="bluetooth">
          <span class="percent-8">100%</span>
          <img class="svg-8-ba" src="${f}" alt="battery">
        </div>
      </div>
    </div>
  </header>

  <main class="main container">
      <a href="#" class="closing-action">
        <img src="${x}" alt="cross">
      </a>

      <h1 class="main-title" data-i18n="Get Unlimited <br>Access">Get Unlimited <br>Access</h1>
      
      <section class="poster-gallery">
        <article class="poster">
          <img src="${_}" srcset="${S} 2x, ${A} 3x" alt="poster-1">
          <h3 class="poster-title" data-i18n="Unlimited Art <br>Creation">Unlimited Art <br>Creation</h3>
          </article>
          <article class="poster">
          <img src="${H}" srcset="${I} 2x, ${P} 3x" alt="poster-2">
          <h3 class="poster-title" data-i18n="Exclusive <br>Styles">Exclusive Styles</h3>
        </article>
        <article class="poster">
          <img src="${$}" srcset="${k} 2x, ${B} 3x" alt="poster-3">
          <h3 class="poster-title" data-i18n="Magic Avatars <br>With 20% Off">Magic Avatars With 20% Off</h3>
        </article>
      </section>

      <section class="interaction">
        <button class="first-option-btn btn active option-btn" id="option-1" data-href="https://apple.com/">
          <div class="left-btn-align">
            <p class="btn-title" data-i18n="YEARLY ACCESS">YEARLY ACCESS</p>
            <p class="btn-subtitle" data-i18n="Just {{price}} per year">Just $39.99 per year</p>
          </div>
          <div class="right-btn-align">
            <p class="btn-subtitle" data-i18n="{{price}} <br>per week">$0.48 <br/>per week</p>
          </div>
          <span class="btn-note" data-i18n="BEST OFFER">BEST OFFER</span>
        </button>
        <button class="second-option-btn btn option-btn" id="option-2" data-href="https://google.com/">
          <div class="left-btn-align">
            <p class="btn-title" data-i18n="WEEKLY ACCESS">WEEKLY ACCESS</p>
          </div>
          <div class="right-btn-align">
            <p class="btn-subtitle" data-i18n="{{price}} <br>per week">$6.99 <br/>per week</p>
          </div>
        </button>
        <button class="submit-btn btn" id="submit" data-i18n="Continue">Continue</button>
      </section>
  </main>

  <footer class="footer">
    <nav class="navigation">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" class="nav-link" data-i18n="Terms of Use">Terms of Use</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" data-i18n="Privacy Policy">Privacy Policy</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" data-i18n="Restore">Restore</a>
        </li>
      </ul>
    </nav>
    <div class="swipe-bar" />
  </footer>
</div>
`;const V="modulepreload",M=function(s){return"/"+s},w={},c=function(e,i,r){let t=Promise.resolve();if(i&&i.length>0){const n=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),v=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.all(i.map(a=>{if(a=M(a),a in w)return;w[a]=!0;const d=a.endsWith(".css"),y=d?'[rel="stylesheet"]':"";if(!!r)for(let p=n.length-1;p>=0;p--){const g=n[p];if(g.href===a&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${y}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":V,d||(l.as="script",l.crossOrigin=""),l.href=a,v&&l.setAttribute("nonce",v),document.head.appendChild(l),d)return new Promise((p,g)=>{l.addEventListener("load",p),l.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}return t.then(()=>e()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},T=(s,e)=>{const i=s[e];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((r,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})},C=["de","en","es","fr","ja","pt"],L=navigator.language.split("-")[0],u=new URLSearchParams(window.location.search).get("lang"),O=async s=>{try{return(await T(Object.assign({"./shared/languages/de.json":()=>c(()=>import("./de-B2zBMGoz.js"),[]),"./shared/languages/en.json":()=>c(()=>import("./en-Dk_vXuVS.js"),[]),"./shared/languages/es.json":()=>c(()=>import("./es-B1cSBe2h.js"),[]),"./shared/languages/fr.json":()=>c(()=>import("./fr-I1bC62mN.js"),[]),"./shared/languages/ja.json":()=>c(()=>import("./ja-nwj-E3O8.js"),[]),"./shared/languages/pt.json":()=>c(()=>import("./pt-D-4C-CmV.js"),[])}),`./shared/languages/${s}.json`)).default}catch(e){return console.error("Failed to load language file:",e),null}};async function m(s){const e=await O(s);document.querySelectorAll("[data-i18n]").forEach(i=>{const r=i.getAttribute("data-i18n");r&&e[r]&&(i.innerHTML=e[r])})}function R(){(u==null?void 0:u.length)===2&&C.includes(u)?m(u):C.includes(L)?m(L):m("en")}R();//!target on interaction
document.getElementById("option-1").addEventListener("click",function(){const s=document.getElementById("option-1"),e=document.getElementById("option-2");if(s&&e){e.classList.remove("active"),s.classList.add("active");const i=s.getAttribute("data-href");i&&localStorage.setItem("selectedHref",i)}});document.getElementById("option-2").addEventListener("click",function(){const s=document.getElementById("option-1"),e=document.getElementById("option-2");if(s&&e){s.classList.remove("active"),e.classList.add("active");const i=e.getAttribute("data-href");i&&localStorage.setItem("selectedHref",i)}});document.getElementById("submit").addEventListener("click",function(){const s=localStorage.getItem("selectedHref");s&&window.open(s,"_blank")});
