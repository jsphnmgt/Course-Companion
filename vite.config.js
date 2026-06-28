import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Vitest runs your component tests in a simulated browser (jsdom) so the tests
// can render components and read the result. The React plugin lets Vite compile
// the JSX in your src/ and test/ files. You do not need to change this file.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
  },
})
