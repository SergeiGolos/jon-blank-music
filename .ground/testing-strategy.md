# Testing Strategy

## Test types and targets
- Unit: pure utilities and small components (if logic-heavy) — target 70%+ statements for units with logic.
- Integration: navigation and head metadata checks per route.
- E2E (optional for v1): smoke tests for key CTAs (Book Lesson, Listen, Contact).

## Tooling
- Recommended: Vitest + Testing Library for units/integration, Playwright for E2E.
- Gate: CI must run `lint`, `build`, and minimal tests before deploy.

## Data management
- Use static fixtures for content; no external network in tests.
