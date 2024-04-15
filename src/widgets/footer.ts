export function Footer(): string {
  return `
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
  `;
}