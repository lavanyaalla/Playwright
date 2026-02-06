const globalParams = require("../Utils/Globalparams");

class Dashboard{

    constructor(page){

        this.page = page;
        this.item1 = page.locator(".card-body h5");
        this.CartIcon = page.getByRole('button', { name: /cart/i }).first()

    }

    async SelectItem(){
  
        const items = await this.item1.allTextContents();
        
        for (const item of items){
            if(item === 'ZARA COAT 3' || item === 'iphone 13 pro'){
                const card = this.page.locator('.card', { hasText: `${item}` });
                await card.hover();
                await card.getByRole('button', { name: ' Add To Cart' }).click();
                console.log(`Selecting item to cart '${item}'`)                
                }

        }   
        await this.CartIcon.click();      
        }

    }

module.exports = { Dashboard };