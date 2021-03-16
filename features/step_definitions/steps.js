const {Given, Then, When} = require('cucumber');
const{
DEEFAULT_TIMEOUT, DEFAULT_CHROME_PATH
}= require('../../config/appconfig');
const puppeteer = require('puppeteer-core');
const{expect} = require('chai');

Given('I navigate to {string}', async function(URL){
    browser = await puppeteer.launch({
        headless: false,
        executablePath: DEFAULT_CHROME_PATH,
        timeout: DEEFAULT_TIMEOUT,
        defaultViewport: null,
        args: ['--start-maximized'],
        ignoreHTTPSErrors: true
    });
    page = await browser.newPage();
    page.setDefaultNavigationTimeout(DEEFAULT_TIMEOUT);
    const visit = await page.goto(URL, {
        timeout: DEEFAULT_TIMEOUT,
        waitUntil: 'networkidle2' 
    });
    return visit;
});

When('I click on {string}', async function(xpath){
    await page.waitForXPath(xpath)
    let target = await page.$x(xpath);
    target[0].click();
    await page.waitForTimeout(1000);
});

Then('I should see page with title {string}', async function(title){
    await page.waitForTimeout(1000);
    const pageTitle = await page.title();
    console.log("Page Title: "+pageTitle);
    expect(pageTitle).to.eql(title);
});