# API Conventions

This project is a static site. There are no runtime APIs in v1.

If server endpoints are added later with Qwik City:

- Use RESTful route endpoints under `src/routes/api/<name>/index.ts`.
- Return JSON with explicit status codes; validate inputs and sanitize outputs.
- Add minimal rate limiting and CORS if exposing public endpoints.
