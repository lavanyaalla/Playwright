// @ts-check
const { test , expect} = require ('@playwright/test');
const {Testdata} = JSON.parse(JSON.stringify(require("../Utils/TestData.json")));

test.only('has title', async ({  browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.flipkart.com/");
console.log(await page.title());
await page.locator("//span[contains(text(),'Login')]").click();
await page.locator("//div/form/div/input[@*='text']").fill(Testdata.username);
console.log("Entering data into the field")
await page.locator("[class='QqFHMw twnTnD _7Pd1Fp']").click();
expect(await page.locator('.UfYqpu _5BVqVB')).toHaveText("Email")

  
});
 

