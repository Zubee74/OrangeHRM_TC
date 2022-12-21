#Login Page TC_01
Feature: Login OrangeHRM
In order to login as a admin
    Scenario: Login into OrangeHRM by using credentials
        Given I am a admin with credential Username and Password
        And I am viewing OrangeHRM loginPage
        When I entered Username and Password 
            | Username | Admin | 
            | Password | admin123| 
        Then I should login into admin panel
        And I hover over The menuitems 
        And I clicked on profile icon
        And I clicked on logout option
        Then I should logout from OrangeHRM admin panel successfully

#Admin panel TC_02         
Feature: Admin panel
After succesful login to admin panel
    Scenario: Login into OrangeHRM admin panel
        Given I am an entity admin with Username Password
        And I enter the user credentials
        When I enter Username and Password
            | Username | Admin | 
            | Password | admin123| 
        Then I should login into OrangeHRM dashboard
        And I hover over admin left side menuitems
        And I clicked on admin 
        Then admin panel should be open

#Dashboard TC_03
Feature: Dashboard panel
After succesful login to dashboard 
    Scenario: Login into OrangeHRM dashboard panel
        Given I am an entity admin with Username Password
        And I enter the user credentials
        When I enter Username and Password
            | Username | Admin | 
            | Password | admin123| 
        Then I should login into OrangeHRM dashboard 
        Then dashboard panel should be open

#Admin/User management TC_04
Feature: User management
User should be search-reset, add, view, and delete from admin panel
    Scenario: Admin should be search/reset, add, view, and delete users from admin panel
        Given I am an entity admin with Username and Password
        And I enter the user credentials
        When I enter Username and Password
            | Username | Admin | 
            | Password | admin@123| 
        Then I should login into OrangeHRM admin panel
        And I search user with Username, User role, employee name, and status from records 
        And I add new user/admin to the record with
            | Username | Admin | 
            | User role | ESS/admin |
            | Employee name | Zubair | 
            | Status | Enable/Disable |
            | Password | admin@123 |
        And I save/cancel the user 
        Then a new user get successfully added to the records






    

            