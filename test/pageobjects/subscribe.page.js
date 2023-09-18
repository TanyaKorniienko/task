const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class SubscribePage extends Page{
    get pageH1(){return $('//h1[contains(text(), "Subscribe to our developer newsletter")]')}
    get emailAddressInput(){return $('//*[@name = "emailAddress"]')}
    get countryList(){return $('#country')}
    get countryItem(){return $('//select//option')}
    get checkbox(){return $('//input[@name = "marketingEmailOptin1"]')}
    get subscribeBtn(){return $('//button//span[contains(text(), "Subscribe")]')}

    async enterEmailAddress(email){
        await this.emailAddressInput.setValue(email)
    }

    async clickSelectCountryMenu(){
        await this.countryList.click()
    }

    async selectCountryInmenu(){
        await this.countryList.selectByAttribute('value', 'UA')
    }

    async clickSubscribeBtn(){
        await this.subscribeBtn.click()
    }

}

module.exports = new SubscribePage();