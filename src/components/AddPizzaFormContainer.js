import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddPizzaForm from './AddPizzaForm';

class AddPizzaFormContainer extends Component {
  addPizza = (pizza) => {
    this.props.dispatch({
      type: 'ADD_PIZZA',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...pizza
      }
    })
  }

  render() {
    return <AddPizzaForm addPizza={this.addPizza} />
  }
}

export default connect()(AddPizzaFormContainer)