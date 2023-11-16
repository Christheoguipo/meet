Feature: Specify number of events
  Scenario: User hasn't specified a number, 32 events are shown by default.
    Given the application is open
    When the list of events is loaded
    Then the user should see 32 events by default.

  Scenario: User can change the number of events displayed.
    Given the list of events is loaded
    When the user types a different number of events
    Then the number of events displayed be filtered equal to the entered number.