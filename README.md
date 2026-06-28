# Module 3 - Activity 1 - Course Companion

> **Your first from-scratch project.** No `// TODO` stubs to fill: you build it
> yourself. Follow the **suggested build order** in the brief and let the tests
> turn green one at a time. It is bigger than a Module 2 activity, so pace
> yourself.

Build a small React app with two halves: a **docs reader** for course material,
and a **flashcard generator** you can study from. You choose the styling
approach (CSS Modules, Tailwind, styled-components) and any UI library.

> **Full brief and concepts** are in your course workspace repo:
> `content/m3-styling/m3a1-course-companion.md`, and the styling docs
> `content/m3-styling/01`-`07`. **Graded out of 100: 50 automated (builds, runs,
> the flashcard contract, responsive, real styling) plus a 50-point design
> rubric. Full rubric in `content/m3-styling/ASSESSMENT.md`.

## What to build

- **Docs reader** (in `src/App.jsx`): a `<nav>` listing at least 3 topics and a
  content area that shows the selected topic (use state or React Router).
- **Flashcard generator** (in [`src/Flashcards.jsx`](src/Flashcards.jsx)): add a
  card (question + answer), list cards, flip to reveal the answer, delete a card.

## The required contract

So the automated checks can drive your flashcards, keep these markers (style and
structure everything else however you like):

- Add form: an input `placeholder="Question"`, an input `placeholder="Answer"`,
  and a `<button>Add card</button>`. Empty input adds nothing.
- Each card: container with `data-testid="flashcard"`, the question always
  visible, a `<button>Flip</button>` (answer hidden until flipped), and a
  `<button>Delete</button>`.
- Use **one real styling approach** (not all inline `style={{}}`).

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m3a1-<classcode>-yourname`, **Private**.
3. Clone it, then add your styling library if you want one and build in `src/`.

```bash
npm install            # base tooling (add e.g. `npm install tailwindcss` for your styling)
npm run dev            # http://localhost:5173
npm test               # run the contract checks locally
npm run build          # must succeed
```

Fill in every field in [`student.json`](student.json).

## Submit

```bash
git add -A
git commit -m "✨ Module 3 Activity 1 - Course Companion"
git push
```

The **Actions** tab shows your contract-test results and screenshots of your app
at phone / tablet / desktop widths.
