const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class MainPage extends Page{
    get signUpBtn(){ 
        return $('//*[contains(text(), "Sign up") and @class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]')
    } 
    get pageH2(){ return $('//div[@class="col-12 py-3 mb-2"]//h2')}
    get startFreeTrialBtn(){ return $('*=free')}
    get subscribeBtn(){ return $('//a[contains(text(),"Subscribe")]')}
    get searchFieldBtn(){return $('//*[contains(text(), "Search or jump to...")]')}
    get searchField(){return $('#query-builder-test')}
    get confirmAction(){ return $('//li[@data-type="command-result"]')}
    // get pricingItem(){ return $('//header//*[contains(text(), "Pricing")]')}
    get pricingItem(){ return $('//header//a[@href="/pricing"]')}
    ////a[@href="/pricing"]

    open(){
        return super.open("https://github.com");
    }
    async clickSignUpBtn(){ 
        await browser.pause(2000)
        await this.signUpBtn.click()
    }

    async clickStartFreeTrialBtn(){
        await this.startFreeTrialBtn.click()
    }
    async clickSubscribeBtn(){
        await this.subscribeBtn.click()
    }
    async clickSearchFieldBtn(){
        await this.searchFieldBtn.click()
    }
    async enterTextInSearchField(text){
        await browser.pause(500)
        await this.searchField.setValue(text)
        await browser.pause(500)
    }
    async confirm(){
        await this.confirmAction.click()
    }

    async clickPricingItem(){
        await this.pricingItem.click()
        await browser.pause(1000)
    }
}


module.exports = new MainPage();