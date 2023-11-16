import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default.', ({ given, when, then }) => {

    let AppComponent;
    let AppDOM;
    let EventListDOM;

    given('the list of events has been loaded', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
    });

    when('the user views the list of events', async () => {

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('each event element should be in a collapsed state by default.', async () => {

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        const eventDetails = EventListItems[0].querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
      });

    });
  });

  test('User can expand an event to see details.', ({ given, when, then, and }) => {

    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let hideShowDetails;

    given('the list of events has been loaded', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
    });

    when(/^the user clicks the "(.*)" button for an event$/, async (arg0) => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        hideShowDetails = EventListItems[0].querySelector('.details-btn');
      });

      const user = userEvent.setup();
      await user.click(hideShowDetails);
    });

    then('the details of the selected event should be expanded', async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        const eventDetails = EventListItems[0].querySelector('.details');
        expect(eventDetails).toBeInTheDocument();
      });
    });

    and(/^the "(.*)" button text should change to "(.*)"$/, async (arg0, arg1) => {
      await waitFor(() => {
        expect(hideShowDetails.textContent).toBe('hide details');
      });
    });

  });


  test('User can collapse an event to hide details.', ({ given, when, then, and }) => {

    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let hideShowDetails;
    let EventListItems;

    given('the event\'s details are shown', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        hideShowDetails = EventListItems[0].querySelector('.details-btn');
      });

      const user = userEvent.setup();
      await user.click(hideShowDetails);


      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        const eventDetails = EventListItems[0].querySelector('.details');
        expect(eventDetails).toBeInTheDocument();
      });
    });

    when(/^the user clicks the "(.*)" button$/, async (arg0) => {
      const user = userEvent.setup();
      await user.click(hideShowDetails);
    });

    then('the details of the selected event should collapse', async () => {
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        const eventDetails = EventListItems[0].querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
      });
    });

    and(/^the "(.*)" button text should change to "(.*)".$/, async (arg0, arg1) => {
      await waitFor(() => {
        expect(hideShowDetails.textContent).toBe('show details');
      });
    });

  });
});