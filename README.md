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

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.
