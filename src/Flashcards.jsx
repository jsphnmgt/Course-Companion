import { useState } from "react"
import styles from './styling.module.css'

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
