import posterFirst1xWebp from '../shared/assets/posters/poster-1.webp'
import posterFirst2xWebp from '../shared/assets/posters/poster-1@2x.webp'
import posterFirst3xWebp from '../shared/assets/posters/poster-1@3x.webp'
import posterSecond1xWebp from '../shared/assets/posters/poster-2.webp'
import posterSecond2xWebp from '../shared/assets/posters/poster-2@2x.webp'
import posterSecond3xWebp from '../shared/assets/posters/poster-2@3x.webp'
import posterThird1xWebp from '../shared/assets/posters/poster-3.webp'
import posterThird2xWebp from '../shared/assets/posters/poster-3@2x.webp'
import posterThird3xWebp from '../shared/assets/posters/poster-3@3x.webp'

export function PosterGalery(): string {
  return `    
      <section class="poster-gallery">
        <article class="poster">
          <img src="${posterFirst1xWebp}" srcset="${posterFirst2xWebp} 2x, ${posterFirst3xWebp} 3x" alt="poster-1">
          <h3 class="poster-title" data-i18n="Unlimited Art <br>Creation">Unlimited Art <br>Creation</h3>
          </article>
          <article class="poster">
          <img src="${posterSecond1xWebp}" srcset="${posterSecond2xWebp} 2x, ${posterSecond3xWebp} 3x" alt="poster-2">
          <h3 class="poster-title" data-i18n="Exclusive <br>Styles">Exclusive Styles</h3>
        </article>
        <article class="poster">
          <img src="${posterThird1xWebp}" srcset="${posterThird2xWebp} 2x, ${posterThird3xWebp} 3x" alt="poster-3">
          <h3 class="poster-title" data-i18n="Magic Avatars <br>With 20% Off">Magic Avatars With 20% Off</h3>
        </article>
      </section>
  `;
}