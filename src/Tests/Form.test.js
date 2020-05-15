import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from '../components/ContactForm';
import { act } from 'react-dom/test-utils';

test("tests that the labels are in the contact form", () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstNameLabel = getByLabelText(/first name/i)
  const lastNameLabel = getByLabelText(/last name/i)
  const emailLabel = getByLabelText(/email/i)
  const messageLabel = getByLabelText(/message/i)

  expect(firstNameLabel).toBeInTheDocument();
  expect(lastNameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(messageLabel).toBeInTheDocument();

});

test("tests the inputs on the form", () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/first name/i)
  const lastNameInput = getByLabelText(/last name/i)
  const emailInput = getByLabelText(/email/i)
  const messageInput = getByLabelText(/message/i)

  fireEvent.change( firstNameInput, {target: {value: "testing first name"}})
  fireEvent.change( lastNameInput, {target: {value: "testing last name"}})
  fireEvent.change( emailInput, {target: {value: "testing@email.com"}})
  fireEvent.change( messageInput, {target: {value: "testing message"}})

  expect(firstNameInput.value).toBe("testing first name")
  expect(lastNameInput.value).toBe("testing last name")
  expect(emailInput.value).toBe("testing@email.com")
  expect(messageInput.value).toBe("testing message")
  
})

