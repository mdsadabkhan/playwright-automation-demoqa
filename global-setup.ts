async function globalSetup() {
  console.log("Global setup: Starting the test suite...");
  // You can set environment variables, clean folders, seed DB, etc.
}

export default globalSetup;



//Test case to run before all test cases
// import { devices } from '@playwright/test';

// console.log(Object.keys(devices));


// import { chromium, FullConfig } from '@playwright/test';

// export default async function globalSetup(config: FullConfig) {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Call the logic from your desired spec file here
//   // e.g., perform login, set session, download file, etc.
//   await page.goto('https://yourapp.com/login');
//   await page.fill('#username', 'admin');
//   await page.fill('#password', 'password');
//   await page.click('button[type="submit"]');

//   // Save state if needed
//   await context.storageState({ path: 'auth.json' });

//   await browser.close();
// }


