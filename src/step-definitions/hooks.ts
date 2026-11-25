import { Before, After,Status } from '@cucumber/cucumber';
import { ENV } from '../utils/env';
import { chromium, Browser, Page } from '@playwright/test';
import { logger } from '../utils/logger';
//import { LoginPage } from '../pages/LoginPage'


let browser: Browser;


export let page: Page;

//code would wait 60sec for before to finish if not will throw exception
Before({ timeout: 60000 },async function () {

    browser = await chromium.launch({

        headless: false
    });

    page = await browser.newPage();
    //await this.
   // await page.goto(ENV.BASE_URL);

    console.log("Browser launched");
});

After(async function ({ result }) {

    if (result?.status === Status.PASSED) {
    logger.info('Scenario Passed. Capturing screenshot');
        await page.screenshot({

            path: `screenshots/failure-${Date.now()}.png`,

            fullPage: true
        });
    }
   logger.info('Closing browser');
    await browser.close();
});