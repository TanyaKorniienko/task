const { expect } = require('@wdio/globals')
const MainPage = require('../pageobjects/main.page')
const RegistrationPage = require('../pageobjects/registration.page')
const TrialPage = require('../pageobjects/trial.page')
const SubscribePage = require('../pageobjects/subscribe.page')
const SuccessfullPage = require('../pageobjects/successfull.page')
const RepoPage = require('../pageobjects/repositories.page')
const PricingPage = require('../pageobjects/pricing.page')

const { browser } = require('@wdio/globals')
const exp = require('constants')

describe('My Github application', () => {

    it('should sign up with valid credentials', async () => {
        await MainPage.open()
        await MainPage.clickSignUpBtn()

        await RegistrationPage.enterEmail('testingaccount891q3n@gmail.com')
        await RegistrationPage.clickAfterEmailContinueBtn()
        await RegistrationPage.enterPassword('123456qaz!qa0')
        await RegistrationPage.clickAfterPasswordContinueBtn()
        await RegistrationPage.enterUsername('tatianaKo22n99nnh66a')
        await RegistrationPage.clickAfterUsernameContinueBtn()
        await RegistrationPage.enterYinOptionsInput('y')
        await RegistrationPage.clickAfterOptionsContinueBtn()

    });


    it('should show H2 and open trial page', async () => {
        await MainPage.open()
        await MainPage.pageH2.scrollIntoView()
        await browser.pause(1000)
     
        await expect(await MainPage.pageH2.isDisplayed())
        await expect(await MainPage.startFreeTrialBtn.isDisplayed())
        await MainPage.clickStartFreeTrialBtn()

        await expect(await TrialPage.pageH1.isDisplayed())
        await TrialPage.clickEnterPriseCloudBtn()
    });

    it('should find Subscribe button and redirect to subscribe page for subscribtion', async () => {
        await MainPage.open()
        await MainPage.subscribeBtn.scrollIntoView()
        await browser.pause(1000)
     
        await expect(await MainPage.subscribeBtn.isDisplayed())
        await MainPage.clickSubscribeBtn()

        await expect(await SubscribePage.pageH1.isDisplayed())

        await SubscribePage.enterEmailAddress('djadhgafgafayttt@gmail.com')
        await SubscribePage.clickSelectCountryMenu()
        await SubscribePage.selectCountryInmenu('Ukraine')
        await SubscribePage.clickSubscribeBtn()

        await expect(await SuccessfullPage.pageH1.isDisplayed())
    });

    it('should search for specified text', async () => {
        await MainPage.open()
        await MainPage.clickSearchFieldBtn()
        await MainPage.enterTextInSearchField('testing')
        await MainPage.confirm()
        await browser.pause(3000)
        await expect(await RepoPage.result.isDisplayed())
    });

    it('should open Pricing page and check for specified title', async () => {
        await MainPage.open()
        await MainPage.clickPricingItem()
        await browser.pause(1000)
        await expect(await PricingPage.pageTitle.isDisplayed())
        
        await PricingPage.compareFeaturesButton.scrollIntoView()
        await PricingPage.clickCompareAllFeaturesBtn()
        await browser.pause(500)
        await expect(PricingPage.compareFeaturesTitle.isDisplayed())
    });

})

