const {test , expect} = require ('@playwright/test');
const path = require('path');

test("practise of amazon website", async({page})=>{

// ----- Handling a prompt ----- //

    /*await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {waitUntil:'networkidle'});
    page.once('dialog', async dialog => {
  console.log('Dialog message:', dialog.message());
  await dialog.accept();
});
    await page.getByRole("button", {name:"Click for JS Alert"}).click();
    await page.waitForTimeout(3000); */


//  --------- Uploading a file --------- //
/*await page.goto("https://the-internet.herokuapp.com/upload", {waitUntil:'networkidle'});
await page.waitForTimeout(3000);
const Filepath = path.resolve('Data/sample.txt');
console.log(Filepath);
await page.setInputFiles("#file-upload", Filepath);

await page.locator('[value=Upload]').click() */


});