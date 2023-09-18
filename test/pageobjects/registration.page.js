const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class RegistrationPage extends Page{
    get userMailInput(){ return $("#email")}
    // get afterEmailContinueBtn(){ return $('//div[@id = "email-container"]//button[contains(text(), "Continue")]')}
    get afterEmailContinueBtn(){ return $('//*[@data-optimizely-event="click.signup_continue.email"]')}
    get passwordInput(){return $("#password")}
    get afterPasswordContinueBtn() {return $('//*[@data-optimizely-event="click.signup_continue.password"]')}
    get usernameInput(){ return $("#login")}
    get afterUsernameContinueBtn(){ return $('//*[@data-optimizely-event="click.signup_continue.username"]')}
    get optionsInput(){ return $('//input[@id="opt_in"]')}
    get afterOptionsContinueBtn(){return $('//*[@data-optimizely-event="click.signup_continue.opt-in"]')}

    async enterEmail(email){
        // await browser.pause(3000)
        await browser.waitUntil(async ()=>{
                        return this.userMailInput.isDisplayed();
                    }, 3000, "Input isn't displayed")
        await this.userMailInput.setValue(email)
    }

    async clickAfterEmailContinueBtn(){
        await browser.pause(500)
        await this.afterEmailContinueBtn.click()
    }

    async enterPassword(password){
        await this.passwordInput.setValue(password)
    }

    async clickAfterPasswordContinueBtn(){
        await browser.pause(500)
        await this.afterPasswordContinueBtn.click()
    }

    async enterUsername(username){
        await this.usernameInput.setValue(username)
    }

    async clickAfterUsernameContinueBtn(){
        await browser.pause(500)
        await this.afterUsernameContinueBtn.click()
    }

    async enterYinOptionsInput(value){
        await browser.pause(1000)
        await this.optionsInput.setValue(value)
    }
    async clickAfterOptionsContinueBtn(){
        await this.afterOptionsContinueBtn.click()
    }

}


module.exports = new RegistrationPage();