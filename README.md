# Quiz App

A multiple-choice quiz built with vanilla HTML, CSS and JavaScript. Choose a category, answer one question at a time against a 15-second timer, and see your score with a full answer review at the end.

## Features
- Question bank stored as a JavaScript object in `questions.js`
- One question at a time with a visible selected-option state
- Per-question countdown timer that auto-advances when time runs out
- Progress bar and "Question X of Y" indicator
- Category selection before starting
- Score summary with performance feedback and correct vs. selected review
- Retake button on the summary screen
- Responsive down to 375px

## Run locally
No build step or dependencies. Either open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Project structure
- `index.html` - markup for the start, quiz and result screens
- `style.css` - styles and theme colors
- `questions.js` - question data
- `script.js` - quiz logic, timer and rendering

## Deploy
Push to GitHub and enable GitHub Pages (Settings > Pages > deploy from `main` branch, root), or drag the folder into Netlify.