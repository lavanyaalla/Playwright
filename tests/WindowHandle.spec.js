const {expect , test} = require ('@playwright/test')

test('Window\tab handling', async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.makemytrip.com/");
await page.locator(".commonModal__close").click();
await page.waitForLoadState();
const newtab = page.locator("//div//li[@class='makeFlex hrtlCenter']") //---> clicking on new tab

const [newPage] =await Promise.all([       //--> promise to ensure all the steps are fulfilled and calling th new page

context.waitForEvent('page'),
newtab.click(),

])
//const arrayText = text.split("@")
    //const domain =  arrayText[1].split(" ")[0]
    
await newPage.locator("//input[@id='Username/Email address']").fill("Lavanya");
await newPage.waitForTimeout(5000)
await page.click('input[id="fromCity"]');
    await page.click('li[role="option"]:has-text("Mumbai, India")');
   await newPage.waitForTimeout(5000) 
    
})
