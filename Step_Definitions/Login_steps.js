const {Given, When, Then}= require ('@cucumber/cucumber');
const {LoginPage} = require ('../Pages/LoginPage');
const playwright = require('@playwright/test')
const {expect} = require ('@playwright/test')


 Given('login sample Application with {string} and {string}', async function (username, Password) {


    const browser = await playwright.chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();
    this.loginpage = new LoginPage(page);
    await this.loginpage.Goto()
           
         });

When('user gives username and password and submit', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });Then('user successfully login into the applicaion', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

