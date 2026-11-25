import { BasePage } from './BasePage';
import { ENV } from '../utils/env';
export class LoginPage extends BasePage {

   // searchBox = 'textarea[name="q"]';
    signUpAndInBtn="//*[text()='Sign In / Sign Up']";
	signInBtn="//*[text()='Login']";
	email="#input-Email";
	password="#input-Password";
	submitBtn="//*[@type='submit']";
	loginText="(//div[@class='relative'])[3]";

	
    async openHomePage() {

        await this.navigate(ENV.BASE_URL);
    }
      async getTitle() {

        return await this.page.title();
    }
   
    async getLoginText() {

    return await this.page.locator(this.loginText).textContent();

}
 getSignUpAndInBtn() {

    return this.page.locator(this.signUpAndInBtn);

}

 getSignInBtn() {

    return this.page.locator(this.signInBtn);

}

 getEmail() {

    return this.page.locator(this.email);

}

 getPassword() {

    return this.page.locator(this.password);

}

 getSubmitBtn() {

    return this.page.locator(this.submitBtn).nth(0);

}


}