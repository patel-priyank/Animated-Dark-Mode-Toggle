const body = document.querySelector('body');
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  body.classList.contains('light-theme') ? enableDarkMode() : enableLightMode();
});

function enableDarkMode() {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-label', 'Switch to light theme');
}

function enableLightMode() {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  themeToggle.setAttribute('aria-label', 'Switch to dark theme');
}

function setThemePreference() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
    return;
  }

  enableLightMode();
}

document.onload = setThemePreference();
