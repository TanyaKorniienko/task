const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class TrialPage extends Page{
    get pageH1(){ return $('//div[@class="application-main "]//h1')}
    get enterpriseCloudBtn(){return $('//div//h2[contains(text(), "Enterprise Cloud")]')}


    async clickEnterPriseCloudBtn(){
        await this.enterpriseCloudBtn.click()
    }
}
module.exports = new  TrialPage ();