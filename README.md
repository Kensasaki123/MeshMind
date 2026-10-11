# MeshMind

React + JavaScript boilerplate powered by Vite with ESLint.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
npm run preview
```

Start editing `src/App.jsx`. Global styles live in `src/index.css`.

Tailwind CSS and Zustand installation was deferred because the npm registry
was unreachable. To add them when connected:

```bash
npm install tailwindcss @tailwindcss/vite zustand
```

Tailwind still requires adding its Vite plugin and CSS import after installation.
