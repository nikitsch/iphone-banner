import { Close } from '../features/buttons/close';
import { Interaction } from '../features/interaction';
import { PosterGalery } from '../features/poster-gallery';

export function Main(): string {
  return `
    <main class="main container">
      ${Close()}
      <h1 class="main-title" data-i18n="Get Unlimited <br>Access">Get Unlimited <br>Access</h1>
      ${PosterGalery()}
      ${Interaction()}
    </main>
  `;
}