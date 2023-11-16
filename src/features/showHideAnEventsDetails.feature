Feature: Show/hide an event's details
  Scenario: An event element is collapsed by default.
    Given the list of events has been loaded
    When the user views the list of events
    Then each event element should be in a collapsed state by default.

  Scenario: User can expand an event to see details.
    Given the list of events has been loaded
    When the user clicks the "show details" button for an event
    Then the details of the selected event should be expanded
    And the "show details" button text should change to "hide details"

  Scenario: User can collapse an event to hide details.
    Given the event's details are shown
    When the user clicks the "hide details" button
    Then the details of the selected event should collapse
    And the "hide details" button text should change to "show details".
