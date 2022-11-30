Feature: Bootcamp E2E

  Bootcamp endToEnd tests for newegg.com shop
  
  Background: 
    Given I am on the home page
    And I close the promo banner if it appears

  Scenario: Search bar
    When I type word "Windows" in the search bar 
    When I Click the search bar icon
    Then I Should have at least one item in the results

  Scenario: Internet shop logo button
    When I Open "Today's Best Deals" tab
    When I Click on the Internet shop cart logo
    Then Check that the page with shopping cart open
  