module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      },
      borderWidth: {
        '14': '14px'
      },
      colors: {
        'background-primary': 'var(--bg-background-primary)',
        'background-secondary': 'var(--bg-background-secondary)',
        'background-tertiary': 'var(--bg-background-tertiary)',
        'copy-primary': 'var(--text-copy-primary)',
        'copy-secondary': 'var(--text-copy-hover)'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: []
}
