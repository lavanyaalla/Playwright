import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  retries: 0,

  use: {
    baseURL: 'https://google.com',
    headless: false,
    screenshot: 'on',
    trace: 'on',
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  reporter: [
    ['list'],
    ['line'],
    ['json', { outputFile: 'test-results.json' }],
  ],
});