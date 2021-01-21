import cuid from 'cuid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({
  setFormOpen,
  createEvent,
  selectedEvent,
  updatedEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEvent]);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (selectedEvent) {
      updatedEvent({ ...selectedEvent, ...values });
    } else {
      createEvent({
        ...values,
        id: cuid(),
        hostedBy: 'Bob',
        attendees: [],
        hostPhotoURL: '/assets/user.png',
      });
    }

    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? 'Edit the event' : 'Create a new event'}
      />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            value={values.title}
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button
          type="submit"
          floated="right"
          positive
          content="Submit"
        ></Button>
        <Button
          as={Link}
          to="/events"
          type="button"
          floated="right"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
