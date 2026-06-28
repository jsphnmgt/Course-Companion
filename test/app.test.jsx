import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App.jsx'

describe('App (docs reader)', () => {
  it('renders without crashing and has a navigation area', () => {
    render(<App />)
    // The docs reader must use a <nav> (role "navigation") for its topic list.
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
