import { defineConfig, devices } from '@playwright/test'
import dotenv from "dotenv"

dotenv.config({
  path: './app_common/environments/.env.test'
})

export default defineConfig({
  testDir: './tests',
  timeout: 6*5*1000,
  expect:{
    timeout: 20000},
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on', //retain-on-failure
    actionTimeout: 20000,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { channel: 'chromium',
             viewport: null,
             launchOptions:{
              args: [
                '--disable-web-security',
                '--start-maximized',
                '--ignore-certificate-errors',
                '--ignore-urlfetcher-cert-request'
              ]
             }
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

});