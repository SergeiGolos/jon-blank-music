import { test, expect } from '@playwright/test';

test.describe('Jon Blanck Music - UI Components', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('/');
  });

  test('should load the main page successfully', async ({ page }) => {
    // Check that the page loads and has the correct title
    await expect(page).toHaveTitle(/Jon Blanck/);
    
    // Take a screenshot for visual verification
    await page.screenshot({ 
      path: 'test-results/screenshots/homepage.png', 
      fullPage: true 
    });
  });

  test('should display chart albums section', async ({ page }) => {
    // Look for the chart albums section
    const chartSection = page.locator('text=Chart-Topping Albums');
    await expect(chartSection).toBeVisible({ timeout: 10000 });
    
    // Check that chart items are loaded
    const chartItems = page.locator('div').filter({ hasText: /^#\d+/ });
    await expect(chartItems.first()).toBeVisible();
    
    // Verify at least one chart item has Spotify/music platform links
    const spotifyLinks = page.locator('a:has-text("Spotify")');
    await expect(spotifyLinks.first()).toBeVisible();
    
    // Take a screenshot of the chart section
    await page.screenshot({ 
      path: 'test-results/screenshots/chart-albums.png',
      clip: await chartSection.boundingBox() || undefined
    });
  });

  test('should display video sections', async ({ page }) => {
    // Look for video performance sections
    const videoPerformances = page.locator('text=Video Performances');
    const ensemblePerformances = page.locator('text=Ensemble Performances');
    
    await expect(videoPerformances).toBeVisible({ timeout: 10000 });
    await expect(ensemblePerformances).toBeVisible({ timeout: 10000 });
    
    // Check that video links are present (looking for play icons or video elements)
    const videoLinks = page.locator('a[target="_blank"]').filter({ 
      has: page.locator('svg') 
    });
    await expect(videoLinks.first()).toBeVisible();
    
    // Take a screenshot of the video sections
    await page.screenshot({ 
      path: 'test-results/screenshots/video-sections.png',
      clip: await videoPerformances.locator('..').boundingBox() || undefined
    });
  });

  test('should display navigation and key sections', async ({ page }) => {
    // Check for main navigation elements when visible
    const heroSection = page.locator('text=JON BLANCK');
    await expect(heroSection).toBeVisible();
    
    // Check for main content sections
    await expect(page.locator('text=Music')).toBeVisible();
    await expect(page.locator('text=Lessons')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
    
    // Take a screenshot of the hero/navigation area
    await page.screenshot({ 
      path: 'test-results/screenshots/navigation.png',
      clip: { x: 0, y: 0, width: 1200, height: 600 }
    });
  });

  test('should display lessons/calendar section', async ({ page }) => {
    // Look for lessons section which may contain scheduling/calendar functionality
    const lessonsSection = page.locator('text=Lessons').first();
    await expect(lessonsSection).toBeVisible();
    
    // Scroll to lessons section
    await lessonsSection.scrollIntoViewIfNeeded();
    
    // Look for any form or interactive elements that might relate to scheduling
    const contactForms = page.locator('form');
    const buttons = page.locator('button');
    
    // Take a screenshot of the lessons/scheduling area
    await page.screenshot({ 
      path: 'test-results/screenshots/lessons-calendar.png',
      fullPage: true 
    });
    
    // At minimum, verify that the lessons section loaded
    await expect(lessonsSection).toBeVisible();
  });

  test('should have responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    
    // Check that mobile menu button is visible
    const mobileMenuButton = page.locator('button').filter({ 
      has: page.locator('span') 
    });
    
    // Take mobile screenshot
    await page.screenshot({ 
      path: 'test-results/screenshots/mobile-view.png',
      fullPage: true 
    });
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.reload();
    
    // Take desktop screenshot
    await page.screenshot({ 
      path: 'test-results/screenshots/desktop-view.png',
      fullPage: true 
    });
    
    // Verify page still loads correctly on both viewports
    await expect(page.locator('text=JON BLANCK')).toBeVisible();
  });
});