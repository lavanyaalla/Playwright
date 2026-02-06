const { expect, test } = require("@playwright/test")
const { decrypt } = require ('../Utils/envEncrypt');

test ('End to End app testing', async({browser})=>{
const browserContext =  await browser.newContext();
const page = await browserContext.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/");

const Username = decrypt(process.env.ORANGE_USERNAME);
const Password = decrypt(process.env.ORANGE_PASSWORD);

await page.locator("#userEmail").fill(Username);
await page.locator("#userPassword").fill(Password);
await page.locator("#login").click();
await page.waitForLoadState('networkidle');




})