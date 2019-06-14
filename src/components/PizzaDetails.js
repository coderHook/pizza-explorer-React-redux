import React, { Component } from 'react'

export default class PizzaDetails extends Component {

  render() {
    const pizza = this.props.pizza

    return (
      <div>
        <h2>{ pizza.name }</h2>

        <p>
          <i>{ pizza.description }</i>
        </p>

        <ul>
          { pizza.ingredients.map(ingredient => 
              <li key={ingredient}>{ ingredient }</li>
            )
          }
        </ul>
      </div>
    )
  }
}
