import OrderForm from "./OrderForm";
import { render } from '@testing-library/react';
import React from "react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("OrderForm", () => {
  it("should render a order form", () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><OrderForm /></Provider>

    const { getByPlaceholderText, getByText, queryByText } = render(testWrapper)

    const input = getByPlaceholderText("Name")
    const submitButton = getByText("Submit Order")
    const ingredient1 = queryByText("beans")
    const ingredient2 = queryByText("hot sauce")

    expect(input).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(ingredient1).toBeInTheDocument()
    expect(ingredient2).toBeInTheDocument()
  })
})
