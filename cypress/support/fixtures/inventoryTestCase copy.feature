Feature: Shopping Cart Management

Background
Given the user is logged in

Scenario: Add an item to the cart
When the user adds the item with ID "1" to the cart
Then the item should be added successfully

Scenario: Verify the item in the cart
Given the user has added the item with ID "1" to the cart
When the user navigates to the cart
Then the cart should contain the item "Sauce Labs Backpack" with quantity "1"

Scenario: Complete a purchase
Given the user has added the item with ID "1" to the cart
And the user has navigated to the cart
And the cart contains the item "Sauce Labs Backpack" with quantity "1"
When the user proceeds to checkout
And fills the checkout form with first name "Test", last name "User", and postal code "12345"
And submits the purchase
Then the user should see the message "Thank you for your order!"
And the user should be able to log out successfully