import { Footer } from '../widgets/footer';
import { Header } from '../widgets/header';
import { Main } from '../widgets/main';

import '../shared/styles/reset.css'
import '../shared/styles/style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="common-wrapper">
  ${Header()}
  ${Main()}
  ${Footer()}
</div>
`
