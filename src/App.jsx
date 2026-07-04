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
  {label: "Biology", content: "Biology is the study of living organisms and their interactions with the environment. It covers topics such as cell structure, genetics, evolution, and ecosystems. From the smallest microbes to the largest mammals, biology helps us understand how life works, adapts, and thrives on Earth."},
  {label: "Chemistry", content: "Chemistry explores the composition, structure, and properties of matter and the changes it undergoes. It covers atoms, molecules, chemical reactions, and the periodic table. Understanding chemistry is essential in fields like medicine, engineering, and environmental science, as it explains the materials and substances that make up our world."},
  {label: "Physics", content: "Physics is the science of matter, energy, and the fundamental forces of nature. It studies concepts like motion, gravity, electricity, magnetism, and thermodynamics. Physics forms the foundation of modern technology, from engines that power vehicles to semiconductors inside computers and smartphones used every day."},
  {label: "Astronomy", content: "Astronomy is the study of celestial objects, space, and the universe as a whole. It covers stars, planets, galaxies, black holes, and the origins of the cosmos. Through telescopes and space exploration, astronomers have expanded our understanding of where we come from and what lies beyond our own solar system."},
  {label: "Earth Science", content: "Earth Science examines the physical structure and processes of our planet, including geology, meteorology, oceanography, and environmental science. It studies how landforms are shaped, how weather systems develop, and how human activity affects the natural world. Understanding Earth Science is key to addressing climate change and natural disaster preparedness."},
]

export default function App() {
  const [selected, setSelected] = useState(0)
  const current = topics[selected]

  return (
    <div>
      <header>
        <h1>Course Companion</h1>
      </header>
      <div className={styles.app}>
        <img src="/sootsprite.png" alt="soot sprite" className={styles['soot-sprite']}/>
        <nav>
          {topics.map((topic, index) => (
            <button key={index} onClick={() => setSelected(index)}>{topic.label}</button>
          ))}
        </nav>

        <div className={styles['docs-area']}>
          <img src="/grid.png" alt="grid" className={styles.grid}/>

          <div className={styles['docs-left']}>
            <img src="/jiji1.png" alt="jiji 1" className={styles.jiji1}/>
            <img src="/totoro.png" alt="totoro" className={styles.totoro}/>
            <div style={{marginTop: 'auto'}}>
              <img src="/jiji2.png" alt="jiji 2" className={styles.jiji2}/>
            </div>
          </div>

          <main>
            <h2>{current.label}</h2>
            <p>{current.content}</p>
          </main>

          <div className={styles['docs-right']}>
            <img src="/cat.png" alt="cat" className={styles.cat}/>
          </div>
        </div>

        <section>
          <Flashcards/>
          <img src="/groupelement.png" alt="group" className={styles['group-element']}/>
        </section>
      </div>
    </div>
  )
}
