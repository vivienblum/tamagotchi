import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

import { string, number } from 'prop-types'

class LifeBar extends Component {
  state = {
    value: this.props.value
  }

  static propTypes = {
    name: string,
    value: number
  }

  static defaultProps = {
    name: '',
    value: 5
  }

  handleIncrement = (e) => {
    e.preventDefault()
  }

  decrementValue = (foot = 1) => {
    this.setState(prevState => ({ value: prevState.value - foot }))
  }

  incrementValue = (foot = 1) => {
    this.setState(prevState => ({ value: prevState.value + foot }))
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.decrementValue(),
      1000
    )
  }

  componentDidUpdate = () => {
    // TODO check if < 0 ==> DEAD
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  shouldComponentUpdate = () => {
    return this.state.value > 0
  }

  render = () => {
    const name = this.props.name
    const value = this.state.value
    return (
      <div>
        <h1>{ name + " " + value }</h1>
        <Button onClick={ this.handleIncrement }/>
      </div>
    )
  }
}

export default LifeBar
