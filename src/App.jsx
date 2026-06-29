import Flashcards from './Flashcards.jsx'
import { useState } from "react"
import styles from './styling.module.css'

// ───────────────────────────────────────────────────────────────────────────
// App - the Course Companion (Part A: docs reader) + the flashcards (Part B)
// ───────────────────────────────────────────────────────────────────────────
//
// Build the docs reader here: a <nav> listing at least 3 topics, and a content
// area that shows the selected topic (use state or React Router). Style it with
// your chosen approach. Then render <Flashcards /> somewhere on the page.
//
// The starter below is just a placeholder so `npm run dev` shows something.
// Replace it with your real layout.

const topics = [
  {label: "Topic 1", content: "Content for Topic 1"},
  {label: "Topic 2", content: "Content for Topic 2"},
  {label: "Topic 3", content: "Content for Topic 3"},
  {label: "Topic 4", content: "Content for Topic 4"},
  {label: "Topic 5", content: "Content for Topic 5"},
]

export default function App() {
  const[selected, setSelected] = useState(0)
  const current = topics[selected]
 
  return (
    <div>
      <h1>Course Companion</h1>
      <nav>
        {topics.map((topic, index) => (
          <button key={index} onClick={() => setSelected(index)}>{topic.label}</button>))}
      </nav>

      <main>
        <h2>{current.label}</h2>
        <p>{current.content}</p>
      </main>
      <Flashcards />
    </div>
  )
}
