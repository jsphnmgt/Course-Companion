# Course Companion

A React study app with a science topic reader and flashcards you can add, flip, and delete. Styled with CSS Modules in a soft green and cream theme.

Originally developed as a course project for 6APSI at Holy Angel University, using a provided starter template to practice React and responsive styling.

## Development

Install Node.js 22 and npm, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. On Windows, use `npm.cmd` if PowerShell blocks `npm`.

## Commands

- `npm run dev`: start the development server.
- `npm test`: run the app tests once.
- `npm run test:watch`: rerun tests as files change.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: preview the production build locally.

## Features

- Read introductions to Biology, Chemistry, Physics, Astronomy, and Earth Science.
- Create flashcards with a question and answer. Both fields are required.
- Flip cards to reveal or hide answers, and delete cards when finished.
- Responsive layout with decorative illustrations.

Flashcards are held in memory and reset when the page reloads.

## Project layout

- `src/App.jsx`: topic reader and page layout.
- `src/Flashcards.jsx`: flashcard creation and controls.
- `src/styling.module.css`: app styles and responsive layouts.
- `public/`: decorative images.
- `test/`: app and flashcard tests.
- `.github/workflows/test.yml`: automated tests and build checks.

The project began with a course template; original attribution is retained in [NOTICE](https://github.com/jsphnmgt/my-bookshelf/blob/main/NOTICE).
