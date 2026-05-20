# Keen — Developer Portfolio

Built with **React + Vite**. Dark, sleek, premium design.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm run build
# then push to GitHub and connect repo on vercel.com
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx / Header.module.css
│   └── Footer.jsx / Footer.module.css
├── sections/
│   ├── Hero.jsx    / Hero.module.css
│   ├── About.jsx   / About.module.css
│   ├── Projects.jsx/ Projects.module.css
│   └── Contact.jsx / Contact.module.css
├── hooks/
│   ├── useScrollReveal.js
│   └── useHeaderHide.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## EmailJS Config

Located in `src/sections/Contact.jsx` at the top:

```js
const EJS_PUBLIC_KEY       = 'o3xDufRKMviGoYHdO'
const EJS_SERVICE_ID       = 'service_9zcwi9e'
const EJS_TEMPLATE_TO_YOU  = 'template_6olzuso'
const EJS_TEMPLATE_TO_USER = 'template_kkutuq8'
```

## Adding More Projects

Edit the `projects` array in `src/sections/Projects.jsx`.
