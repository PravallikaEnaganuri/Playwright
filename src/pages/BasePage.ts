import { Page } from '@playwright/test';
export class BasePage {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async navigate(url: string) {

        await this.page.goto(url);
    }

    // async click(locator: string) {

    //     await this.page.locator(locator).click();
    // }

    // async fill(locator: string, value: string) {

    //     await this.page.locator(locator).fill(value);
    // }
}