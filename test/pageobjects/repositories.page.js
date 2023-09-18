const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class RepoPage extends Page{

    get resultList(){return $$('//div[@data-testid="results-list"]//h3//a//span')}
    get result(){return $('//a//span[contains(text(), "testing")]')}
}
module.exports = new RepoPage();