import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';

import './Orders.css';

class Orders extends Component {

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
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
    setOrders: (orders) => dispatch(setOrders(orders))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
