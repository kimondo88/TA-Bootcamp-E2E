const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com/`);
});

When("I close the promo banner if it appears", async () => {
    try{
        const promo = await $(`//*[@id="modal-Website"]/div[2]/div/button`).waitForDisplayed({timeout: 2500});
        promo.click();
    }catch(error){
        console.error(error);
    }
});

When("I entry word {string} in the search bar", async (item) => {
    const input = await $(`input[type=search]`);
    await input.waitForExist({timeout: 10000});
    await input.setValue(`${item}`);
}); 
When("I Click the search", async () => {
    const search = await $(`div.header2021-search-button > button`);
    await search.waitForExist({timeout: 5500});
    await search.click({x: 1, y: 1}) //offset to bypass aria element intercepting click
    await search.click({x: 1, y: 1}) //second click for search to refresh page
});

Then("I Check that at least one item appears", async () => {
    const itemCell = await $(`div.list-wrap > div.item-cells-wrap`);
    await itemCell.waitForExist({timeout: 7500});
    await expect(itemCell).toHaveChildren({gte: 1});
});