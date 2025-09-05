# Refactor Index Page into Composable Components - Requirements

## Overview

The goal is to refactor the monolithic index.tsx file into smaller, reusable Qwik components to improve maintainability, readability, and scalability. Key enhancements include loading content from external JSON files for videos, charts, and lessons data.

## Functional Requirements

1. **Component Extraction**:
   - Break down the index.tsx into the following components:
     - HeroSection: Handles the main introduction and call-to-action buttons.
     - AchievementsSection: Displays chart-topping success and professional experience.
     - ServicesGrid: Showcases performance, education, and recording services.
     - MusicSection: Includes chart albums, video highlights, and streaming links.
     - LessonsSection: Covers lesson types, options, and scheduling.
     - ContactSection: Manages contact information and form.
     - Footer: Site footer with location and copyright.

2. **Data Management**:
   - Create videos.json with structure: [{ title, description, videoLink, image?, group }]
   - Create chart.json with structure: [{ title, year, chartNumber, links: [{ platform, url }] }]
   - Create lessons.json with structure: [{ day, time, available }]
   - Load data asynchronously using Qwik's useResource for optimal performance.

3. **Data Integration**:
   - Videos grouped by "Video Performances" and "Ensemble Performances".
   - Charts display with associated streaming links.
   - Lessons show available time blocks for scheduling.

## Non-Functional Requirements

- **Performance**: Ensure components load efficiently with lazy loading where appropriate.
- **Maintainability**: Components should be self-contained with clear props interfaces.
- **Accessibility**: Maintain existing ARIA labels and keyboard navigation.
- **Compatibility**: Ensure no breaking changes to existing functionality.

## Acceptance Criteria

- Homepage renders without visual or functional regressions.
- All data loads correctly from JSON files.
- Components are reusable in other parts of the site.
- Code is well-documented and follows Qwik best practices.
