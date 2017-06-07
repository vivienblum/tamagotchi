import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';

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
    value: 50
  }

  render() {
    const name = this.props.name
    const value = this.state.value
    return (
      <h1>{ name + " " + value }</h1>
    )
  }
}

export default LifeBar