const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class SuccessfullPage extends Page{
    get pageH1(){return $('//h1[@id="hero-section-brand-heading"]')}
}


module.exports = new SuccessfullPage();