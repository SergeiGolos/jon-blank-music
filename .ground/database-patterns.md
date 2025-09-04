# Database Patterns

- No database in v1; the site is fully static.
- For small datasets (pricing, links), prefer TS/JSON constants checked into `src/lib/`.
- If a CMS is introduced later, ensure build-time fetching (SSG) with caching and fallback content.
