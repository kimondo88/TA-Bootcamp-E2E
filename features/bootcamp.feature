Feature: Bootcamp E2E

  Background: I am guest on the homepage and i close promo banner if it pop up
    Given I am on the home page
    When I close the promo banner if it appears

  Scenario: Search bar
    When I entry word "Windows" in the search bar 
    When I Click the search
    Then I Check that at least one item appears

  # Scenario: Internet shop logo button
  #   When I Open "Today's Best Deals" tab
  #   When I Click on the Internet shop logo (top right corner)
  #   Then Check that the main page opened

  