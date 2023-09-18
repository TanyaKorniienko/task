const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class PricingPage extends Page {
    get pageTitle(){ return $('//h1[contains(text(),"Get the complete developer platform.")]')}
    get compareFeaturesButton(){return $('*=Compare all featur')}
    get compareFeaturesTitle(){return $('//h1[contains(text(),"Compare features")]')}

    async clickCompareAllFeaturesBtn(){
        await this.compareFeaturesButton.click()
    }
}

module.exports = new PricingPage();