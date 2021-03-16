const {
    setWorldConstructor
} = require('cucumber')

const appconfig = require('../config/appconfig')
const puppeteer = require('puppeteer-core')
const scope = require("./support/scope")

const World = function({attach}){
    scope.driver = puppeteer;
    scope.context = {};
    this.attach = attach;
};

setWorldConstructor(World);