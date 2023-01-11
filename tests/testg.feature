#Feature file for google form (textbox and button)
Feature: Google form with texbox and button
Scenario: try to search on google form using text query 
        When : I clicked on text box 
        And : Enter the user query 
        And : I clicked on search button
        Then : Search results should be display

Background: User email and password credentials
        Given : User enter url of github 
        And : User clicked on sign in button
        Then : Sign in window will be display
        And : User enter email and password
        And : User clicked sign in button
#Test Cse for GitHub
Feature: Sign in to Github and getting repository
Scenario: User want to accesss the github repo 
        Given : User enter url of github 
        And : User clicked on sign in button
        Then : Sign in window will be display
        And : User enter email and password
        And : User clicked sign in button
        Then : OTP will be genrated automaticaly 
        And : User enter OTP on Authontication window
        Then : User get successful login

#Nagative test case
Scenario: User want to access the github repo
        And : User enter expired OTP
        Then: User get a warrning for wrong OTP
        And : User should not login to github

#Test cases for Google search.............

Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown

Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown
    And the related results include "Panda Express"
    But the related results do not include "pandemonium"

#Doc Strings
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown
    And the result page displays the text
      """
      Scientific name: Ailuropoda melanoleuca
      Conservation status: Endangered (Population decreasing)
      """
#Step Table
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown
    And the following related results are shown
      | related       |
      | Panda Express |
      | giant panda   |
      | panda videos  |

#Background Steps
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Background:
    Given a web browser is on the Google page

  Scenario: Simple Google search for pandas
    When the search phrase "panda" is entered
    Then results for "panda" are shown

  Scenario: Simple Google search for elephants
    When the search phrase "elephant" is entered
    Then results for "elephant" are shown

#Scenario Outline
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Scenario Outline: Simple Google searches
    Given a web browser is on the Google page
    When the search phrase "<phrase>" is entered
    Then results for "<phrase>" are shown
    And the related results include "<related>"
    
    Examples: Animals
      | phrase   | related       |
      | panda    | Panda Express |
      | elephant | Elephant Man  |
#Step_Defination.........................
# module.exports = function () {
#   this.Given(/^a web browser is on the Google page$/, function (callback) {
#     callback.pending();
#   });
#   this.When(/^the search phrase \"([^\"]*)\" is entered$/, function (phrase, , callbackphrase, callback) {
#     callback.pending();
#   });
#   this.Then(/^results for \"([^\"]*)\" are shown$/, function (phrase, , callbackphrase, callback) {
#     callback.pending();
#   });
#   this.And(/^the related results include \"([^\"]*)\"$/, function (related, , callbackrelated, callback) {
#     callback.pending();
#   });
# };

#Tags 
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  @automated @google @panda
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown
#Step_Defination...........................
# module.exports = function () {
#   this.Given(/^a web browser is on the Google page$/, function (callback) {

#expect(page.locator('#username')).toBeVisible({ timeout: 2000 })
#     callback.pending();

#   });

#   this.When(/^the search phrase \"([^\"]*)\" is entered$/, function (panda, callback) {
#     callback.pending();
#   });

#   this.Then(/^results for \"([^\"]*)\" are shown$/, function (panda, callback) {
#     callback.pending();
#   });

# };



