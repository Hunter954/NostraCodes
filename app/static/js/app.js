const root = document.documentElement;
const colorButtons = document.querySelectorAll('.color-dot');

const themes = {
  violet: { accent: '#7c5cff', rgb: '124, 92, 255' },
  cyan: { accent: '#18c7ff', rgb: '24, 199, 255' },
  gold: { accent: '#ffb703', rgb: '255, 183, 3' },
  green: { accent: '#17c964', rgb: '23, 201, 100' }
};

function applyTheme(key) {
  const data = themes[key];
  if (!data) return;
  root.style.setProperty('--accent', data.accent);
  root.style.setProperty('--accent-rgb', data.rgb);
}

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    colorButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applyTheme(button.dataset.theme);
  });
});
