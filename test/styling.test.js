// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Confirms the project uses a real styling approach rather than only inline
// style={{}}. Passes if it finds a CSS Modules file, a Tailwind setup, a
// CSS-in-JS / UI library dependency, or Sass.
const root = fileURLToPath(new URL('..', import.meta.url))

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name.startsWith('.')) continue
    const p = `${dir}/${entry.name}`
    if (entry.isDirectory()) out.push(...walk(p))
    else out.push(p)
  }
  return out
}

describe('Styling approach', () => {
  it('uses a real styling approach (not only inline styles)', () => {
    const pkg = JSON.parse(readFileSync(`${root}/package.json`, 'utf8'))
    const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })
    const hasLib = deps.some((d) =>
      /^(tailwindcss|styled-components|@emotion\/|@mui\/|@chakra-ui\/|@radix-ui\/|sass|@stitches\/)/.test(d),
    )

    const files = walk(root)
    const hasModuleCss = files.some((f) => f.endsWith('.module.css') || f.endsWith('.module.scss'))
    const hasTailwindConfig = files.some((f) => /tailwind\.config\.[cm]?[jt]s$/.test(f))
    const hasTailwindImport = files
      .filter((f) => f.endsWith('.css'))
      .some((f) => readFileSync(f, 'utf8').includes('tailwind'))

    const ok = hasLib || hasModuleCss || hasTailwindConfig || hasTailwindImport
    expect(
      ok,
      'Use a real styling approach: CSS Modules (*.module.css), Tailwind, styled-components, or a UI library (not only inline style={{}}).',
    ).toBe(true)
  })
})
