import Flashcards from './Flashcards.jsx'

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

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Course Companion</h1>
      <p>TODO: build the docs reader (a nav of topics + a content area).</p>
      <Flashcards />
    </div>
  )
}
