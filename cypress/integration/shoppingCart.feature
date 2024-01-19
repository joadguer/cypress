Feature: Shopping Cart Functionality

Background:
    Given the user is on the homepage

Scenario: User selects Phones category
    When the user selects the Phones category
    Then the user should be on the Phones category page

Scenario: User selects Laptops category
    When the user selects the Laptops category
    Then the user should be on the Laptops category page

Scenario: User selects Monitors category
    When the user selects the Monitors category
    Then the user should be on the Monitors category page