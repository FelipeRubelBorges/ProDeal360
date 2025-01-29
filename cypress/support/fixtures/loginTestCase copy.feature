Feature: User Login

Scenario: Login with valid credentials
Given the user is on the login page
When the user enters a valid username and password
And submits the login form
Then the user should be successfully logged in

Scenario: Login with invalid credentials
Given the user is on the login page
When the user enters an invalid username and password
And submits the login form
Then the user should see an error message "Epic sadface: Username and password do not match any user in this service"

Scenario: Login with empty credentials
Given the user is on the login page
When the user leaves both the username and password fields empty
And submits the login form
Then the user should see an error message "Epic sadface: Username is required"

Scenario: Login with an empty password
Given the user is on the login page
When the user enters a valid username but leaves the password field empty
And submits the login form
Then the user should see an error message "Epic sadface: Password is required"

Scenario: Login with an empty username
Given the user is on the login page
When the user enters a password but leaves the username field empty
And submits the login form
Then the user should see an error message "Epic sadface: Username is required"

