# UI Testing with Playwright

This project uses Playwright for end-to-end testing and automated screenshot generation during the build process.

## Overview

The testing setup validates three main UI sections:
1. **Chart Albums** - Displays chart-topping albums with streaming links
2. **Video Highlights** - Shows video performances and ensemble recordings  
3. **Calendar/Events** - Currently integrated with lessons/contact sections

## Test Structure

- `tests/ui-components.spec.ts` - Main UI component validation tests
- `tests/visual-regression.spec.ts` - Screenshot generation for build artifacts
- `playwright.config.ts` - Playwright configuration

## Available Commands

```bash
# Run all tests
npm run test

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# Generate screenshots only
npm run test:screenshots

# Debug tests
npm run test:debug
```

## Build Integration

Screenshots are automatically generated as part of the build process:

```bash
npm run build
```

This will:
1. Build the application
2. Run screenshot generation tests
3. Create artifacts in `test-results/build-artifacts/`

## Screenshot Artifacts

The following screenshots are generated during each build:

- `full-page.png` - Complete homepage screenshot
- `chart-albums-section.png` - Chart albums section
- `video-section.png` - Video highlights section  
- `hero-section.png` - Hero/banner section
- `navigation.png` - Navigation menu
- `desktop-view.png` - Desktop viewport
- `tablet-view.png` - Tablet viewport  
- `mobile-view.png` - Mobile viewport
- `mobile-menu-open.png` - Mobile menu interaction

## CI/CD Integration

GitHub Actions automatically:
- Installs Playwright browsers
- Runs all UI tests
- Generates screenshots
- Uploads artifacts for download

See `.github/workflows/playwright.yml` for the complete CI configuration.

## Test Coverage

### Chart Albums Section
- ✅ Section visibility
- ✅ Chart item loading
- ✅ Streaming platform links
- ✅ Visual screenshot capture

### Video Highlights Section  
- ✅ Video performance sections
- ✅ Ensemble performance sections
- ✅ Video link functionality
- ✅ Play button visibility

### Calendar/Events (Lessons Integration)
- ✅ Lessons section loading
- ✅ Form/interaction elements
- ✅ Scheduling interface validation

### Responsive Design
- ✅ Mobile viewport testing
- ✅ Desktop viewport testing  
- ✅ Navigation responsiveness
- ✅ Mobile menu functionality

## Local Development

To run tests locally, you'll need to install Playwright browsers:

```bash
npx playwright install
```

Then start the development server and run tests:

```bash
npm run preview  # Start preview server
npm run test     # Run tests in another terminal
```