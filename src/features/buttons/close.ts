import crossIcon from '../../shared/assets/svg/cross.svg'

export function Close(): string {
  return `
    <a href="#" class="closing-action">
      <img src="${crossIcon}" alt="cross">
    </a>
  `;
}