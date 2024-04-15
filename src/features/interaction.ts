import { OptionFirst } from '../features/buttons/option-first';
import { OptionSecond } from '../features/buttons/option-second';
import { Submit } from '../features/buttons/submit';

export function Interaction(): string {
  return `    
    <section class="interaction">
      ${OptionFirst()}
      ${OptionSecond()}
      ${Submit()}
    </section>
  `;
}