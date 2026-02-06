const base = require('@playwright/test');
const {LoginPage} = require ('../Pages/LoginPage');
const {Dashbaord} = require ('../Pages/Dashboard');
const {Cart} = require('../Pages/Cart');



const test = base.test.extend({         // test.extend is used to create your own custom fixtures ny extending the base test

    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboard : async({ page }, use)=>{
    await use(new Dashbaord(page));

  },

  cart : async({ page }, use)=>{
    await use(new Cart(page));
  }

})

const expect = base.expect;

module.exports = { test, expect };