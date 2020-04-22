import React from 'react';
import App from './App.js';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';

describe("App", () => {
  let testWrapper;

  beforeEach(() => {
    const testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}>
        <App />
      </Provider>;
  })

  it("should customer names", async() => {
    const { queryByText } = render(testWrapper)

    const name1 = await waitForElement(() => queryByText("Pat"))
    const name2 = await waitForElement(() => queryByText("Sam"))
    const name3 = await waitForElement(() => queryByText("Alex"))

    expect(name1).toBeInTheDocument()
    expect(name2).toBeInTheDocument()
    expect(name3).toBeInTheDocument()
  })

  it("should have new customer order", async() => {
    const { getByText, getByPlaceholderText, getByRole } = render(testWrapper)

    const nameInput = getByPlaceholderText("Name")
    const beansButton = getByRole("button", {name: "beans"})
    const submitButton = getByRole("button", {name: "Submit Order"})

    expect(nameInput).toBeInTheDocument()
    expect(beansButton).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(nameInput, {target: {value: 'tim'}})
    // fireEvent.click(beansButton)
    // fireEvent.click(submitButton)

  })

})
