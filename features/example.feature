Feature: Example Test

Scenario: Example Test

    Given I navigate to "http://automationpractice.com/index.php"
    Then I should see page with title "My Store"
    When I click on "//a[text()='Contact us']"
    Then I should see page with title "Contact us - My Store"
    When I click on "//a[@title='My Store']"
    Then I should see page with title "My Store"