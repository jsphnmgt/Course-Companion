import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Flashcards from '../src/Flashcards.jsx'

// Fill the add-card form and submit. Uses the contract markers from the brief:
// placeholders "Question"/"Answer" and a button named "Add card".
async function addCard(user, question, answer) {
  await user.clear(screen.getByPlaceholderText('Question'))
  await user.clear(screen.getByPlaceholderText('Answer'))
  if (question) await user.type(screen.getByPlaceholderText('Question'), question)
  if (answer) await user.type(screen.getByPlaceholderText('Answer'), answer)
  await user.click(screen.getByRole('button', { name: 'Add card' }))
}

describe('Flashcards', () => {
  it('adds a card and shows its question', async () => {
    const user = userEvent.setup()
    render(<Flashcards />)
    await addCard(user, 'What is JSX?', 'Syntax sugar for createElement')
    expect(screen.getByText('What is JSX?')).toBeInTheDocument()
    expect(screen.getAllByTestId('flashcard')).toHaveLength(1)
  })

  it('hides the answer until the card is flipped', async () => {
    const user = userEvent.setup()
    render(<Flashcards />)
    await addCard(user, 'Q1', 'Secret answer')
    expect(screen.queryByText('Secret answer')).not.toBeInTheDocument()
    const card = screen.getByTestId('flashcard')
    await user.click(within(card).getByRole('button', { name: 'Flip' }))
    expect(screen.getByText('Secret answer')).toBeInTheDocument()
  })

  it('flips back to hide the answer again', async () => {
    const user = userEvent.setup()
    render(<Flashcards />)
    await addCard(user, 'Q1', 'Secret answer')
    const flip = within(screen.getByTestId('flashcard')).getByRole('button', { name: 'Flip' })
    await user.click(flip)
    await user.click(flip)
    expect(screen.queryByText('Secret answer')).not.toBeInTheDocument()
  })

  it('deletes a card', async () => {
    const user = userEvent.setup()
    render(<Flashcards />)
    await addCard(user, 'Q1', 'A1')
    expect(screen.getAllByTestId('flashcard')).toHaveLength(1)
    const card = screen.getByTestId('flashcard')
    await user.click(within(card).getByRole('button', { name: 'Delete' }))
    expect(screen.queryAllByTestId('flashcard')).toHaveLength(0)
  })

  it('ignores empty input', async () => {
    const user = userEvent.setup()
    render(<Flashcards />)
    await user.click(screen.getByRole('button', { name: 'Add card' }))
    expect(screen.queryAllByTestId('flashcard')).toHaveLength(0)
  })
})
