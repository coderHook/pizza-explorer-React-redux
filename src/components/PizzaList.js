import React, { Component } from 'react'

export default class PizzaList extends Component {
  render() {
    return (
      <div>
        <h1>Pizza Explorer</h1>
        <ul>
          {this.props.pizzas.map(pizza => 
            <li key={pizza.id} 
                onClick={() => this.props.selectPizza(pizza.id)}>{pizza.name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}

