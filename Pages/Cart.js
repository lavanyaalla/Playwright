class Cart{

constructor(page){

        this.page = page;
        this.itemcards = page.locator('.infoWrap');
        

    }

    async CartItemsValidation(){
        const CardItemNames = await this.itemcards.allTextContents();
        console.log(CardItemNames);
        const totalText = await this.page.locator('.prodTotal.cartSection p').innerText();
        console.log(totalText);
        for (const price of priceValue){

            console.log(price)
        }
    }
}
module.exports={Cart};