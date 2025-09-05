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
    // Wait for all sections to load, but be tolerant of network issues
    try {
      await expect(page.locator('text=JON BLANCK').or(page.locator('h2:has-text("Listen & Watch")'))).toBeVisible({ timeout: 15000 });
    } catch (error) {
      console.log('Main content selector failed, trying fallback');
      // Wait a bit more for the page to load even if specific text isn't found
      await page.waitForTimeout(2000);
    }
    
    // Take a full page screenshot for build artifacts
    await page.screenshot({
      path: 'test-results/build-artifacts/full-page.png',
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('generate section-specific screenshots', async () => {
    // Chart Albums Section - use more specific selector
    const chartSection = page.locator('h3:has-text("Chart-Topping Albums")').locator('..');
    if (await chartSection.isVisible()) {
      try {
        await chartSection.screenshot({
          path: 'test-results/build-artifacts/chart-albums-section.png',
          animations: 'disabled'
        });
      } catch (error) {
        console.log('Chart section screenshot failed, using page screenshot');
        await page.screenshot({
          path: 'test-results/build-artifacts/chart-albums-fallback.png',
          animations: 'disabled'
        });
      }
    }

    // Video Sections  
    const videoSection = page.locator('h3:has-text("Video Performances")').locator('..');
    if (await videoSection.isVisible()) {
      try {
        await videoSection.screenshot({
          path: 'test-results/build-artifacts/video-section.png',
          animations: 'disabled'
        });
      } catch (error) {
        console.log('Video section screenshot failed, using page screenshot');
      }
    }

    // Hero Section with better selector
    const heroSection = page.locator('text=JON BLANCK').or(page.locator('h2:has-text("Listen & Watch")')).first();
    if (await heroSection.isVisible()) {
      try {
        await heroSection.locator('..').screenshot({
          path: 'test-results/build-artifacts/hero-section.png',
          animations: 'disabled'
        });
      } catch (error) {
        console.log('Hero section screenshot failed');
      }
    }

    // Navigation (when visible)
    await page.evaluate(() => window.scrollTo(0, 500)); // Trigger nav visibility
    await page.waitForTimeout(500);
    
    const navigation = page.locator('nav').first();
    if (await navigation.isVisible()) {
      try {
        await navigation.screenshot({
          path: 'test-results/build-artifacts/navigation.png',
          animations: 'disabled'
        });
      } catch (error) {
        console.log('Navigation screenshot failed');
      }
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
    
    // Try to find and click mobile menu button with force option to avoid interception
    const mobileMenuButton = page.locator('nav button').or(page.locator('button.md\\:hidden')).first();
    if (await mobileMenuButton.isVisible()) {
      try {
        await mobileMenuButton.click({ force: true, timeout: 5000 });
        await page.waitForTimeout(300); // Wait for animation
        
        await page.screenshot({
          path: 'test-results/build-artifacts/mobile-menu-open.png',
          animations: 'disabled'
        });
      } catch (error) {
        // If click fails, just take a screenshot without the interaction
        console.log('Mobile menu interaction failed, taking screenshot without interaction');
        await page.screenshot({
          path: 'test-results/build-artifacts/mobile-menu-closed.png',
          animations: 'disabled'
        });
      }
    }

    // Reset to desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.reload();
    await page.waitForLoadState('networkidle');
  });
});