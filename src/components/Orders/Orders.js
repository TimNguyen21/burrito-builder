import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOrders, removeOrder } from '../../actions';
import { getOrders} from '../../apiCalls';

import './Orders.css';

class Orders extends Component {

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  deleteOrder = (e) => {
    const currentOrderID = parseInt(e.target.id)
    const updatedOrder = this.props.orders.filter(order => order.id !== currentOrderID)

    fetch("http://localhost:3001/api/v1/orders/" + currentOrderID, {
      method: "DELETE"
    })
      .then(() => this.props.updateOrders(updatedOrder))
      .catch(err => console.log(err.message))
  }

  orderEls = () => {
    return this.props.orders.map(order => {
      return (
        <article className="order" key={order.id}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
        {order.ingredients.map(ingredient => {
          return <li>{ingredient}</li>
        })}
        </ul>
        <button id={order.id} onClick={this.deleteOrder}>Remove Order</button>
        </article>
      )
    });
  }

render() {
    return (
      <section>
      { this.orderEls().length ? this.orderEls() : <p>No orders yet!</p> }
      </section>
    )
  }
}

const mapStateToProps = ({ orders }) => ({
  orders
});

const mapDispatchToProps = dispatch => (
  {
    setOrders: (orders) => dispatch(setOrders(orders)),
    updateOrders: (orders) => dispatch(removeOrder(orders))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
