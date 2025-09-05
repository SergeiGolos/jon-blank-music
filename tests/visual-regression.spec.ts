import { test, expect, Page } from '@playwright/test';

/**
 * Visual regression tests for generating screenshots during build process
 * These tests are specifically designed to create visual artifacts
 */
test.describe('Visual Regression - Screenshot Generation', () => {
  let page: Page;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test('generate full page screenshot', async () => {
    // Wait for all sections to load
    await expect(page.locator('text=JON BLANCK')).toBeVisible();
    
    // Take a full page screenshot for build artifacts
    await page.screenshot({
      path: 'test-results/build-artifacts/full-page.png',
      fullPage: true,
      animations: 'disabled' // Disable animations for consistent screenshots
    });
  });

  test('generate section-specific screenshots', async () => {
    // Chart Albums Section
    const chartSection = page.locator('text=Chart-Topping Albums').locator('..').locator('..');
    if (await chartSection.isVisible()) {
      await chartSection.screenshot({
        path: 'test-results/build-artifacts/chart-albums-section.png',
        animations: 'disabled'
      });
    }

    // Video Sections
    const videoSection = page.locator('text=Video Performances').locator('..').locator('..');
    if (await videoSection.isVisible()) {
      await videoSection.screenshot({
        path: 'test-results/build-artifacts/video-section.png',
        animations: 'disabled'
      });
    }

    // Hero Section
    const heroSection = page.locator('text=JON BLANCK').locator('..').locator('..');
    if (await heroSection.isVisible()) {
      await heroSection.screenshot({
        path: 'test-results/build-artifacts/hero-section.png',
        animations: 'disabled'
      });
    }

    // Navigation (when visible)
    await page.evaluate(() => window.scrollTo(0, 500)); // Trigger nav visibility
    await page.waitForTimeout(500);
    
    const navigation = page.locator('nav');
    if (await navigation.isVisible()) {
      await navigation.screenshot({
        path: 'test-results/build-artifacts/navigation.png',
        animations: 'disabled'
      });
    }
  });

  test('generate viewport-specific screenshots', async () => {
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ 
        width: viewport.width, 
        height: viewport.height 
      });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      await page.screenshot({
        path: `test-results/build-artifacts/${viewport.name}-view.png`,
        fullPage: true,
        animations: 'disabled'
      });
    }
  });

  test('generate component interaction screenshots', async () => {
    // Mobile menu interaction
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Try to find and click mobile menu button
    const mobileMenuButton = page.locator('button').first();
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await page.waitForTimeout(300); // Wait for animation
      
      await page.screenshot({
        path: 'test-results/build-artifacts/mobile-menu-open.png',
        animations: 'disabled'
      });
    }

    // Reset to desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.reload();
    await page.waitForLoadState('networkidle');
  });
});