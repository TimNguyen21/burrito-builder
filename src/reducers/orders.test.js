import { orders } from './orders'

describe("orders", () => {
  it("should return initial state", () => {
    const expectedResult = []
    const result = orders(undefined, '')

    expect(result).toEqual(expectedResult)
  })

  it("when recieving SET_ORDERS, should return an array of orders", () => {
    const apiOrders = [{id:1, name:"tim", ingredients: ["beans", "lettuce"]},
      {id:2, name:"tom", ingredients: ["cheese", "salsa"]}]

    const action = {type: "SET_ORDERS", orders: apiOrders}

    const expectedResult = apiOrders
    const result = orders(undefined, action)

    expect(result).toEqual(expectedResult)
  })

  it("when recieving ADD_ORDER, should return an updated array of orders", () => {
    const apiOrders = [{id:1, name:"tim", ingredients: ["beans", "lettuce"]},
      {id:2, name:"tom", ingredients: ["cheese", "salsa"]}]

    const newOrder = {id:3, name:"tony", ingredients:["beans"]}
    const action = {type: "ADD_ORDER", order: newOrder}

    const expectedResult = [...apiOrders, newOrder]
    const result = orders(apiOrders, action)

    expect(result).toEqual(expectedResult)
  })
})
