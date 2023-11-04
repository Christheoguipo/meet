
## Project description
The Meet app is a progressive web application that offers offline functionality and utilizes serverless architecture developed through test-driven development (TDD). Users can access upcoming events for specific cities at any time. The app and its serverless backend are hosted online and can be installed and used across devices, even offline. This project showcases next-generation serverless infrastructure, offers a seamless user experience through PWA, and emphasizes quality code with TDD.

## How to run the app?
- On your terminal, type in `npm start`.
- The app opens automatically on your default browser or manually via http://localhost:3000.

You can also access the live app hosted on Github pages: https://christheoguipo.github.io/meet/

## Project dependencies 
### Dependencies:
- "@testing-library/jest-dom": "^5.17.0",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4",
- "workbox-background-sync": "^6.6.0",
- "workbox-broadcast-update": "^6.6.0",
- "workbox-cacheable-response": "^6.6.0",
- "workbox-core": "^6.6.0",
- "workbox-expiration": "^6.6.0",
- "workbox-google-analytics": "^6.6.0",
- "workbox-navigation-preload": "^6.6.0",
- "workbox-precaching": "^6.6.0",
- "workbox-range-requests": "^6.6.0",
- "workbox-routing": "^6.6.0",
- "workbox-strategies": "^6.6.0",
- "workbox-streams": "^6.6.0"

## User Stories:
1. As a user, I should be able to filter events by city
so that I can see a list of events taking place in that city.

2. As a user, I should be able to Show or Hide Event Details by City
so I could see the details of the Event in that City or Hide it when I'm done looking at it.

3. As a user, I should be able to Specify number of Events
so that I could specify how many event I could see in the events list at a time.

4. As a user, I should be able to use the App when Offline 
so that I could access the app and the events I viewed when I was online.

5. As a user, I should be able to add an App Shortcut to the Home Screen
so that I could easily open it from my home screen

6. As a user, I should be able to display the charts visualizing the event details
so that I could have an overview about the events for every city.

## Scenarios: 
1. Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.

2. Show or Hide Event Details by City
  - Given the list of events has been loaded;
    When user clicks on “Show details” button for an event;
    Then the event element will be expanded to show the event details and the button text changes to "Hide Details".

  - Given the "Show details" has been clicked by the user and the button text changed to "Hide Details";
    When the user clicks "Hide Details";
    Then the event element will be collapsed to hide the event details and the button text changes back to "Show Details".

3. Given the list of events has been loaded;
When the user types in a number in the "Number of Events" textbox;
Then the events list will be filtered according to the number that was typed in.

4. Given the user's activities have been saved locally;
When the user opens the app while offline;
Then the user will still be able to check for the events or all the activites made while the user was online.

5. Given the App shortcut was created on the home screen of the user;
When the user opens it;
Then the user will be able to open the app.

6. Given the list of events has been loaded;
When the user is in the main screen of the app;
Then user will see a pie chart that shows the number of events on each city.
 
## Usage of Serverless functions
For my Meet App, I will use serverless functions to handle access token retrieval from the authorization server. These functions will initiate the OAuth process, obtain access tokens, and manage user authentication. AWS Lambda will be my choice for hosting these serverless functions.
