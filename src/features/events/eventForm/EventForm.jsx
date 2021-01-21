import cuid from 'cuid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Label, Segment } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventAction';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  // const [values, setValues] = useState(initialValues);

  function handleFormSubmit(values) {
    if (selectedEvent) {
      dispatch(updateEvent({ ...selectedEvent, ...values }));
    } else {
      dispatch(
        createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'Bob',
          attendees: [],
          hostPhotoURL: '/assets/user.png',
        })
      );
    }

    history.push('/events');
  }

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        <FormikForm className="ui form ">
          <Header content="Event Details" sub color="teal" />
          <MyTextInput name="title" placeholder="Event title" />

          <MyTextInput placeholder="Category" name="category" />
          <Header content="Event location details" sub color="teal" />
          <MyTextInput placeholder="Description" name="description" />

          <MyTextInput placeholder="City" name="city" />

          <MyTextInput placeholder="Venue" name="venue" />

          <MyTextInput type="date" placeholder="Date" name="date" />

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
        </FormikForm>
      </Formik>
    </Segment>
  );
}
