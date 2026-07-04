import { useState } from "react"
import styles from './styling.module.css'
// ───────────────────────────────────────────────────────────────────────────
// Flashcards - the flashcard generator (Part B of the project)
// ───────────────────────────────────────────────────────────────────────────
//
// This is the part the automated tests drive, so it must meet the contract in
// the project brief (m3a1-course-companion.md). Build it however you like and
// style it with your chosen approach; just keep these hooks:
//
//   Add-card form:
//     - an input with placeholder="Question"
//     - an input with placeholder="Answer"
//     - a <button>Add card</button>
//     - adding ignores empty input (both fields must be non-empty)
//
//   Each card:
//     - the container has data-testid="flashcard"
//     - the question is always visible
//     - a <button>Flip</button> that reveals/hides the answer
//       (the answer must NOT be in the document until flipped)
//     - a <button>Delete</button> that removes that card
//
// Concepts you will use (all from Module 2): useState, arrays of objects,
// lists with keys, controlled inputs, conditional rendering, events.
//
// Replace everything below with your implementation.

export default function Flashcards() {
  const [cards, setCards] = useState([])
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [flip, setFlip] = useState({})

  function addCard() {
    if (!question.trim() || !answer.trim()) return
    setCards([...cards, { question, answer }])
    setQuestion("")
    setAnswer("")
  }

  function deleteCard(index) {
    setCards(cards.filter((_, i) => i !== index))
  }

  function flipCard(index) {
    setFlip({ ...flip, [index]: !flip[index] })
  }

  return (
    <section>
      <h2>Flashcards</h2>

      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div className={styles['answer-row']}>
        <input
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={addCard}>Add card</button>
      </div>

      <div className={styles['cards-list']}>
        {cards.map((card, index) => (
          <div key={index} className={styles['card-wrapper']}>
            <p className={styles['card-question']}>{card.question}</p>
            
            <div data-testid="flashcard">
              {flip[index] ? <p>{card.answer}</p> : <p>Flip to see the answer</p>}

              <div className={styles['card-buttons']}>
                <button onClick={() => flipCard(index)}>Flip</button>
                <button onClick={() => deleteCard(index)}>Delete</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
