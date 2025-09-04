# Coding Standards

- Use TypeScript with strict typing; no `any` unless justified.
- Keep components small, pure, and resumable-friendly; prefer signals/stores over ad-hoc state.
- Accessibility: semantic HTML, labels for inputs, focus states, alt text for media.
- SEO: set meta tags in `router-head` and per-route where needed.
- Tailwind best practices: extract repeated patterns into small components.
- Avoid server state; prefer static data for v1. Use Qwik City endpoints only if absolutely needed later.
