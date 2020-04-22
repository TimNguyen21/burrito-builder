import * as actions from './index';

describe("action creators", () => {
  it("should have a type of SET_ORDERS", () => {
    const orders = [{id:1, name:"tim", ingredients: ["beans", "lettuce"]},
      {id:2, name:"tom", ingredients: ["cheese", "salsa"]}]

    const expectedAction = {
      type: "SET_ORDERS",
      orders: orders
    }

    const result = actions.setOrders(orders)

    expect(result).toEqual(expectedAction)
  })

  it("should have a type of ADD_ORDER", () => {
    const order = {id:3, name:"tony", ingredients: ["beans", "lettuce"]}

    const expectedAction = {
      type: "ADD_ORDER",
      order: order
    }

    const result = actions.addOrder(order)

    expect(result).toEqual(expectedAction)
  })

})
