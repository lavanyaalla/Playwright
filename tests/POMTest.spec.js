const {test} = require ('../Fixtures/Test_Fixture');
 const {LoginPage} = require ('../Pages/LoginPage');
 const {Dashboard} = require ('../Pages/Dashboard');
 const{Cart} = require ('../Pages/Cart');
 
test('test E2E App with Page object model', async({page})=>{

    const loginpage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    const Cartpage = new Cart(page);

    await loginpage.Goto();
    await loginpage.login('lavanya1@gmail.com','Password@99');
    await dashboard.SelectItem();
    await Cartpage.CartItemsValidation();


});