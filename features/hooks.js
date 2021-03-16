const {Before,After, setDefaultTimeout} = require('cucumber')
const appconfig = require('../config/appconfig')
const scope = require('./support/scope')

Before(async function(){
    setDefaultTimeout(appconfig.DEEFAULT_TIMEOUT)
});

After(async function(){
if( browser && page){
    const cookies = await page.cookies();
    if(cookies && cookies.length > 0){
        await page.deleteCookie(...cookies);
    }
    await page.close();
    page = null;
    await browser.close();
    browser = null;
}
});