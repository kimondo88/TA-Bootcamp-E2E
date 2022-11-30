const { Given, When, Then } = require('@wdio/cucumber-framework');
const offset = {x: 1, y: 1};
const atLeastOne = {gte: 1};

Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com/`);
});

When("I close the promo banner if it appears", async () => {
    try{
        const promo = await $(`#modal-Website > div > div > button`);
        await promo.click();
    }catch(error){
        console.error(error);
    }
});

When("I type word {string} in the search bar", async (item) => {
    const input = await $(`input[type=search]`);
    await input.waitForExist();
    await input.setValue(item);
}); 

When("I Click the search bar icon", async () => {
    const search = await $(`div.header2021-search-button > button`);
    await search.waitForExist();
    await search.click(offset) //offset to bypass aria element intercepting click
    await search.click(offset) //second click for search to refresh page
});

Then("I Should have at least one item in the results", async () => {
    const itemCell = await $(`div.list-wrap > div.item-cells-wrap`);
    await itemCell.waitForExist();
    await expect(itemCell).toHaveChildren(atLeastOne);
});

When("I Open {string} tab", async (title) => { 
    const deals = await $(`a[title="${title}"] > span`);
    await deals.waitForExist();
    await deals.click(offset);
});

When("I Click on the Internet shop cart logo", async () => { 
    const shop = await $(`a[title="Shopping Cart"] > i`);
    await shop.waitForExist();
    await shop.click();
});

Then("Check that the page with shopping cart open", async () => {
    const cart = await $(`#cart-top`);
    await cart.waitForExist();

    const shoppingCart = await $(`#cart-top > div > h1`);
    await expect(shoppingCart).toHaveTextContaining("Shopping Cart"); 
});