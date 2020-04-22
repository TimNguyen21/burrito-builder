export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const updateOrder = (name, ingredients) => {
  return fetch("http://localhost:3001/api/v1/orders",
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(
          {name: name, ingredients: ingredients}
      ),
    }
  )
}
