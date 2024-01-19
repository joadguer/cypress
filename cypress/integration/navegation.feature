Feature: Header Navigation

Background:
    Given the user is on the homepage

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