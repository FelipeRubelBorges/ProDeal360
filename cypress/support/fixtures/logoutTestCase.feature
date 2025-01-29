Feature: User Logout

Background
Given the user is logged in

Scenario: Successfully logout
When the user clicks on the logout button
Then the user should be logged out successfully
And the user should be redirected to the login page