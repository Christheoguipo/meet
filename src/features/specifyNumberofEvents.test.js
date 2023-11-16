import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberofEvents.feature');

defineFeature(feature, test => {
  test('User hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {

    let AppComponent;
    let AppDOM;
    let EventListDOM;

    given('the application is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when('the list of events is loaded', () => {
      EventListDOM = AppDOM.querySelector('#event-list');
    });

    then(/^the user should see (\d+) events by default.$/, async (arg0) => {
      await waitFor(() => {
        const eventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(eventListItems.length).toBe(32);
      });
    });
  });


  test('User can change the number of events displayed.', ({ given, when, then }) => {

    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let eventListItems;
    const numberOfEventsEntered = 5;

    given('the list of events is loaded', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        eventListItems = within(EventListDOM).queryAllByRole('listitem');
      });
    });

    when('the user types a different number of events', async () => {
      const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const numberOfEventsTextbox = within(NumberOfEventsDOM).queryByRole('spinbutton');

      const user = userEvent.setup();
      await user.type(numberOfEventsTextbox, `{backspace}{backspace}${numberOfEventsEntered}`);

    });

    then('the number of events displayed be filtered equal to the entered number.', async () => {
      await waitFor(() => {
        eventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(eventListItems.length).toBe(numberOfEventsEntered);
      });
    });
  });

});