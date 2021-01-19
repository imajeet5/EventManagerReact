import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

export default function EventList({ events, selectEvent }) {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent} />
      ))}
    </Fragment>
  );
}
