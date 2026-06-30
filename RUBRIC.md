# Rubric - m3a1 Course Companion

This activity is worth **100 points**, split into an automated half and a design
half.

## Automated checks (50 pts, scored from the tests/CI - not by hand)

| Check | Points |
| --- | --- |
| Builds and runs (`npm run build`, app loads without crashing) | 10 |
| Uses a real styling approach (CSS Modules / Tailwind / styled-components / UI lib, not only inline styles) | 5 |
| Required behavior / structure: add / flip / delete flashcards, and topic navigation works | 25 |
| Responsive: no horizontal scroll at 375px | 10 |
| **Automated subtotal** | **50** |

(`student.json` must also be filled in.)

## Design rubric (50 pts, scored from your running app, screenshots, and code)

This is where craft is rewarded - a polished, thoughtful project pulls ahead of
one that merely passes.

| Criterion | Max | Excellent (full marks) | Satisfactory (~60-80%) | Needs work (~0-40%) |
| --- | --- | --- | --- | --- |
| Visual design & hierarchy | 12 | clear focal points; intentional spacing, type, and color; polished | readable but plain or uneven | cluttered or unstyled |
| Responsive quality | 8 | adapts gracefully at every width with sensible breakpoints | works but awkward at some sizes | only "does not overflow" |
| Consistency / design system | 8 | one approach used well; reused components; coherent look | mostly consistent, some drift | ad-hoc and inconsistent |
| Accessibility | 8 | semantic elements, labelled controls, good contrast, keyboard-usable | partially addressed | ignored |
| Code organization | 7 | sensible components and folders, no dead code | okay structure | monolithic or messy |
| Completeness / UX | 7 | the docs reader and flashcards are genuinely pleasant to use | mostly there | thin or unfinished |

Design rubric total: 50 points.

**Automated 50 + design 50 = 100 total.**

Notes for feedback: name the concept to revisit or ask a guiding question;
never hand over corrected code. Comment on both the code (components, state,
naming, organization) and, where the screenshots show a styled page, the visual
design.
