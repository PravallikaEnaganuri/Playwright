import { Given,When,Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


import { page } from './hooks';

   //const loginPage = new LoginPage(page);
Given('user is home page', async function () {

  const loginPage = new LoginPage(page);

    await loginPage.openHomePage();

    console.log('URL launched');
});

When('clicks login', async function () {

       const loginPage = new LoginPage(page);

    await loginPage.getSignUpAndInBtn().click();

    await loginPage.getSignInBtn().click();
});

When(

    'user enters email {string} and password {string}',

    async function (email: string, password: string) {

         const loginPage = new LoginPage(page);

        await loginPage.getEmail().fill(email);
        await loginPage.page.waitForTimeout(2000);

        await loginPage.getPassword().fill(password);
    }
);

Then('user is sucessfully logged in', async function () {
   const loginPage = new LoginPage(page);

    await loginPage.getSubmitBtn().click();

    await page.waitForTimeout(2000);

    const loginText = await loginPage.getLoginText();

    expect(loginText).toContain('Hi');

    console.log('User successfully logged in');
});