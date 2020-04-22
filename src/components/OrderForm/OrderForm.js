import React, { Component } from 'react';
import { addOrder } from '../../actions';
import { connect } from 'react-redux';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.updateOrder();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  updateOrder = () => {
    if(this.state.ingredients.length === 0) {
      alert("please add ingredient(s)")
    } else {
      this.props.addOrder({id: Date.now(), name: this.state.name, ingredients: this.state.ingredients})
    }
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

// const mapStateToProps = ({ orders }) => ({
//   orders
// });

const mapDispatchToProps = dispatch => (
  {
    addOrder: (order) => dispatch(addOrder(order))
  }
);

export default connect(null, mapDispatchToProps)(OrderForm);
