#Login verification TC_01
Feature: Login OrangeHRM in order to login as a admin|user
    Scenario: Login into OrangeHRM by using credentials
        Given that a admin|user with credential Username and Password
        And user viewing OrangeHRM loginPage
        When user entered Username and Password 
            | Username | Admin | 
            | Password | admin123| 
        Then user should login into admin panel
        And user hover over The menuitems 
        And user clicked on profile icon
        And user clicked on logout option
        Then user should logout from OrangeHRM admin panel successfully

#Admin panel TC_02         
Feature: Admin panel after succesful login to dashboard
    Scenario: Login into OrangeHRM admin panel
        Given that a admin|user with Username Password
        And user enter the user credentials
        When user enter Username and Password
            | Username | Admin | 
            | Password | admin123| 
        Then user should login into OrangeHRM dashboard
        And user hover over admin left side menuitems
        And user clicked on admin 
        Then admin panel should be open

#Dashboard TC_03
Feature: Dashboard panel after succesful login to dashboard 
    Scenario: Login into OrangeHRM dashboard panel
        Given that a admin|user with Username Password
        And user enter the user credentials
        When user enter Username and Password
            | Username | Admin | 
            | Password | admin123| 
        Then user should login into OrangeHRM dashboard 
        Then dashboard panel should be open

#Admin/User management TC_04
Feature: User management, User should be search-reset, add, view, and delete from admin panel
    Scenario: Admin should be search|reset, add, view, and delete users from admin panel
        Given that a admin|user with Username and Password
        And user enter the user credentials
        When user enter Username and Password
            | Username | Admin | 
            | Password | admin@123| 
        Then user should login into OrangeHRM admin panel
        And user search user with Username, User role, employee name, and status from records 
        And user add new user|admin to the record with
            | Username | Admin | 
            | User role | ESS/admin |
            | Employee name | Zubair | 
            | Status | Enable/Disable |
            | Password | admin@123 |
        And user save/cancel the user 
        Then a new user get successfully added to the records

#Logout verification TC_05
Feature: Profile Options drop-down verification
    Scenario: User profile options with Logout functionality
        Given that a admin|user with Username and Password
        When user enter Username and Password
            | Username | Admin | 
            | Password | admin@123|
        Then user should login to OrangeHRM dashboard successfully
        And user hover to user profile icon
        And user clicked user profile icon 
        And user got drop-down options about, Support, Change password and Logout
        When user clicked on logout option
        Then User should be logout successfully

#PIM panel verifications TC_06
Feature: PIM pane verifaction of OrangeHRM
    Scenario: User enter to dashboard and Hover to PIM panel
        Given that a admin|user with Username and Password 
        When user enter Username and Password
            | Username | Admin |
            | Password | admin123 |
        Then User should login to OrangeHRM dashboard
        And User hover and clicked to PIM panel 
        And PIM panel should be open with Employee information listed
        When User clicked on employee list 
        Then employee information should be listed with 
            | Employee Name | Zubair | 
            | Employee Id | ID_007 | 
            | Employee Status | Enable | 
            | Include | Current Employee | 
            | Supervisor Name | Pravin Patil |
            | Job Title | Automation Tester | 
            | Sub Unit | Engineering |
        And User clicked search|reset with employee information
            | Employee Name | Employee Id | Employee Status | Include | Supervisor Name | Job Title | Sub Unit |
        Then employee information listed as records found
        And User can edit or delete the employee information

#Maintanance panel OrangeHRM TC_07
Feature: User enter to dashboard and hover to maintainance panel
     Scenario: User enter to dashboard and Hover to PIM panel
        Given that a admin|user with Username and Password 
        When user enter Username and Password
            | Username | Admin |
            | Password | admin123 |
        Then User should login to OrangeHRM dashboard
        And User hover and clicked to Maintanance panel 
        Then User should invoke for Administrator Access
        And User should enter the credentials
            | Username | Admin |
            | Password | admin123 |
        And User enter Username and password 
            | Username | Admin |
            | Password | admin123 |
        And User clicked on confirmed|cancel
        Then User should get Administrator Access with
            | Username | Admin |
            | Password | admin123 |
        And Purge Employee Records display with
            | Past employee |
        And User clicked on search button
        Then User should get the Purge Employee Records


















    

            |