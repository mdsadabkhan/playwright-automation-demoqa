# playwright-irctc-automation
To use this Repo, install playwrights by passing the below command in VS code terminal:
Command: npm install playwright@latest
# Install below dependencies
1. npm install dotenv --save
2. Also after installing dotenv, add below line in configSetupFile:
   import dotenv from "dotenv"
        dotenv.config({
          path: './app_commons/environments/.env.test'
       })
 3. npm install dayjs --save
 4. npm install jira-client
 5. npm install tesseract.js
 6. npm install playwright axios postman-collection
 7. npm install exceljs
 8. npm install @playwright/test picocolors dayjs
 9. npm install @axe-core/playwright
# To run a script, pass the detailas as below:
npx playwright test location/of/testcase.test.ts


# Add below in config to ignore certificate/JS pop-up related issue:
use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    actionTimeout: 50000,
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
    }
    ]
# Also use below delays in define config section to run script efficiently as below:
timeout: 6*60*1000,
  expect:{
    timeout: 50000},
