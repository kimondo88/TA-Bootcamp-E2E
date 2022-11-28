const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com/`);
});

When("I close the promo banner if it appears", async () => {
    try{
        const promo = await $(`#modal-Website > div > div > button`).waitForDisplayed();
        await promo.click();
    }catch(error){
        console.error(error);
    }
});

When("I entry word {string} in the search bar", async (item) => {
    const input = await $(`input[type=search]`);
    await input.waitForExist();
    await input.setValue(item);
}); 

When("I Click the search", async () => {
    const search = await $(`div.header2021-search-button > button`);
    await search.waitForExist();
    await search.click({x: 1, y: 1}) //offset to bypass aria element intercepting click
    await search.click({x: 1, y: 1}) //second click for search to refresh page
});

Then("I Check that at least one item appears", async () => {
    const itemCell = await $(`div.list-wrap > div.item-cells-wrap`);
    await itemCell.waitForExist();
    await expect(itemCell).toHaveChildren({gte: 1});
});

When("I Open {string} tab", async (title) => { 
    const deals = await $(`a[title="${title}"] > span`);
    await deals.waitForExist();
    await deals.click();
});

When("I Click on the Internet shop logo", async () => { 
    const shop = await $(`a[title="Shopping Cart"] > i`);
    await shop.waitForExist();
    await shop.click();
});

Then("Check that the main page opened", async () => {
    const cart = await $(`#cart-top`);
    await cart.waitForExist();

    const shoppingCart = await $(`#cart-top > div > h1`);
    await expect(shoppingCart).toHaveTextContaining("Shopping Cart"); 
});