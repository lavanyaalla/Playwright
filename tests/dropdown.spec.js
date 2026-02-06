const {test, expect} = require ('@playwright/test')



test ('dropown test', async ({page})=>{

    // await page.goto("https://www.makemytrip.com/");
    // await page.locator(".commonModal__close").click();
    // await page.waitForTimeout(5000);
    // await page.click('input[id="fromCity"]');
    // await page.click('li[role="option"]:has-text("Mumbai, India")');
    
    // await page.click('input[id="toCity"]');
    // await page.click('li[role="option"]:has-text("Hyderabad")');

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.fill("//input[@name='username']", 'admin')
    await page.fill("//input[@type='password']", 'admin123');
    await page.getByRole("button", { name: " Login " }).click();

    
})