# Refactor Index Page into Composable Components

## 1. Context and Goals

- **Business Context**: The current index.tsx file is a monolithic component containing all sections of the homepage, making it difficult to maintain, test, and reuse components. Refactoring into smaller, composable components will improve code organization, readability, and scalability for Jon Blanck's music website.
- **Success Criteria**:
  - The homepage renders identically after refactoring.
  - Components are reusable across different pages.
  - Data is loaded from external JSON files for easy content management.
  - Improved maintainability and reduced bundle size through code splitting.
- **In-scope**: Breaking down the hero, achievements, services, music, lessons, and contact sections into separate components; creating JSON data files for videos, charts, and lessons; implementing data loading logic.
- **Out-of-scope**: Changing the visual design or adding new features; backend integration for dynamic data; SEO optimizations beyond current meta tags.

## 2. Requirements

- **Functional Requirements**:
  - Extract the following sections into individual Qwik components: HeroSection, AchievementsSection, ServicesGrid, MusicSection, LessonsSection, ContactSection.
  - Create JSON files: videos.json, chart.json, lessons.json in the root directory (e.g., src/assets/data/).
  - Load data from JSON files using Qwik's resource loading or static imports.
  - Ensure all existing functionality (navigation, links, forms) remains intact.
  - Support grouping in videos.json for "Video Performances" and "Ensemble Performances".
  - Display chart data with links in chart.json.
  - Show available lesson time blocks from lessons.json.
- **Non-functional Requirements**:
  - Performance: Components should lazy-load where possible to reduce initial bundle size.
  - Reliability: Ensure data loading handles errors gracefully (e.g., fallback to empty arrays).
  - Security: No sensitive data in JSON files; validate data structure on load.
  - Compliance: Maintain accessibility standards (ARIA labels, keyboard navigation).

## 3. Architecture Overview

- **High-level Diagram**:
  ```
  Index Page (index.tsx)
  ├── HeroSection (hero-section.tsx)
  ├── AchievementsSection (achievements-section.tsx)
  ├── ServicesGrid (services-grid.tsx)
  ├── MusicSection (music-section.tsx)
  │   ├── ChartToppingAlbums (chart-albums.tsx)
  │   ├── VideoHighlights (video-highlights.tsx)
  │   └── StreamingLinks (streaming-links.tsx)
  ├── LessonsSection (lessons-section.tsx)
  │   ├── LessonTypes (lesson-types.tsx)
  │   └── LessonOptions (lesson-options.tsx)
  ├── ContactSection (contact-section.tsx)
  │   ├── ContactInfo (contact-info.tsx)
  │   └── ContactForm (contact-form.tsx)
  └── Footer (footer.tsx)
  ```
- **Component Responsibilities**:
  - Each component handles its own rendering and state.
  - Data loading is centralized in a data service or directly in components using Qwik's useResource.
- **Boundaries and Dependencies**: Components depend on shared utilities for data loading; no external APIs, only static JSON.

## 4. Data and API Design

- **Data Models**:
  - videos.json: Array of { title: string, description: string, videoLink: string, image?: string, group: "Video Performances" | "Ensemble Performances" }
  - chart.json: Array of { title: string, year: number, chartNumber: number, links: { platform: string, url: string }[] }
  - lessons.json: Array of { day: string, time: string, available: boolean }
- **Data Lifecycle**: Load JSON files at build time using static imports; cache in components for performance.
- **API Endpoints/Contracts**: N/A (static data).

## 5. Detailed Design

- **Sequence Diagrams/Flows**:
  1. Index page loads → Import and render all section components.
  2. Each section component → Load data from JSON using useResource → Render with data.
- **Edge Cases and Failure Modes**:
  - JSON file missing: Fallback to empty data or default content.
  - Invalid JSON structure: Log error and use defaults.
  - Large data sets: Implement pagination or virtualization if needed (not anticipated).

## 6. Testing Strategy

- **Test Types**: Unit tests for individual components; integration tests for data loading; visual regression tests for UI consistency.
- **Coverage Approach**: Aim for 80% coverage on component logic and data handling.
- **Test Data and Environments**: Use mock JSON data for tests; test in development and production builds.

## 7. Risks and Tradeoffs

- **Alternatives Considered**: Keeping monolithic structure vs. full micro-frontend architecture (chose component-based for simplicity).
- **Known Risks**: Potential increase in bundle size if not lazy-loaded; mitigated by Qwik's optimization.
- **Mitigations**: Use dynamic imports for non-critical components.

## 8. Rollout and Observability

- **Migration/Backfill Plan**: Replace sections in index.tsx incrementally; test each component before merging.
- **Metrics, Logging, Alerts**: Monitor page load times; log data loading errors.

## 9. Work Plan

- See tasks.md for detailed milestones and task decomposition.

## 10. Open Questions

- Confirm exact JSON schema with content owner (due: end of week).
- Decide on lazy-loading strategy for performance (due: design review).
