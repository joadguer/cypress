Feature: Featured Items Carousel

Background:
    Given the user is on the homepage


Scenario: User can see the first featured item initially
  When the user is on the homepage
  Then the user should see the first featured item

Scenario: User can navigate through featured items
  When the user interacts with the featured items carousel
  Then the user should see the next featured item


Scenario: User can go back to the previous featured item
  When the user interacts with the featured items carousel
  And the user clicks on the previous button in the carousel
  Then the user should see the previous featured item





Scenario: User can navigate to Home link
  When the user clicks on the Home link in the header
  Then the user should see the Home index

Scenario: User can navigate to Contact link
  When the user clicks on the Contact link in the header
  Then the user should be navigated to the Contact page

Scenario: User can navigate to About Us link
  When the user clicks on the About Us link in the header
  Then the user should be navigated to the About Us page

Scenario: User can navigate to Cart link
  When the user clicks on the Cart link in the header
  Then the user should be navigated to the Cart page

Scenario: User can navigate to Log In link
  When the user clicks on the Log In link in the header
  Then the user should be navigated to the Log In page

Scenario: User can navigate to Sign Up link
  When the user clicks on the Sign Up link in the header
  Then the user should be navigated to the Sign Up page



Scenario: User selects Phones category
    When the user selects the Phones category
    Then the user should see 7 items in the Phones category

Scenario: User selects Laptops category
    When the user selects the Laptops category
    Then the user should see 7 items in the Laptops category

Scenario: User selects Monitors category
    When the user selects the Monitors category
    Then the user should see 7 items in the Monitors category






 Scenario: Select a Phone
    When the user selects the Phones category
    And the user selects Samsung Galaxy S6
    Then the user should be on the product page for Samsung Galaxy S6

Scenario: Select a Laptop
    When the user selects the Laptops category
    And the user selects Sony Vaio i5
    Then the user should be on the product page for Sony Vaio i5

Scenario: Select a Monitor
    When the user selects the Monitors category
    And the user selects Apple Monitor 24
    Then the user should be on the product page for Apple Monitor 24       





Scenario: User adds a product to the cart
  When the user selects Samsung Galaxy S6
  And the user clicks on the Add to Cart button
  And the user navigate to the Cart page
  Then the product should be added to the cart



Scenario: User adds a product to the cart
  When the user selects Samsung Galaxy S6
  And the user clicks on the Add to Cart button
  And the user navigate to the Cart page
  Then the product should be added to the cart


Scenario: User can remove the last item from the cart
    When the user selects Samsung Galaxy S6
    And the user clicks on the Add to Cart button
    And the user navigate to the Cart page
    When the user navigates to the Cart page
    And the user removes the last item from the cart
    Then the cart should not contain the deleted item 


Scenario: User fills in the order details on the confirmation page
  When the user selects Samsung Galaxy S6
  And the user clicks on the Add to Cart button
  And the user navigate to the Cart page

  And the user purchase the cart  
  And the user fills in the name field with a random name
  And the user fills in the country field with a random country
  And the user fills in the city field with a random city
  And the user fills in the credit card field with a random credit card number
  And the user selects a random month
  And the user selects a random year
  And the user clicks the Purchase button
  And the user clicks the Ok button
  Then the user should see a confirmation message