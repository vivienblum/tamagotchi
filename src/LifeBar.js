import React, { Component } from 'react'
import { Button, ProgressBar, Col, Row } from 'react-bootstrap'
import { string, number, func } from 'prop-types'

class LifeBar extends Component {
  state = {
    value: this.props.value
  }

  static propTypes = {
    name: string,
    value: number,
    onEnd: func.isRequired
  }

  static defaultProps = {
    name: '',
    value: 50
  }

  handleIncrement = (e) => {
    e.preventDefault()
    this.incrementValue()
  }

  decrementValue = (foot = 1) => {
    this.setState(prevState => ({ value: prevState.value - foot }))
  }

  incrementValue = (foot = 10) => {
    this.setState(prevState => ({ value: prevState.value + foot }))
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.decrementValue(),
      500
    )
  }

  componentDidUpdate = () => {
    if (this.state.value === 0) {
      this.props.onEnd()
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  shouldComponentUpdate = () => {
    return this.state.value > 0 && this.state.value < 100
  }

  render = () => {
    const name = this.props.name
    const value = this.state.value
    var style = ""
    if (this.state.value >= 75) {
      style = "success"
    }
    else if (this.state.value >= 50) {
      style = "info"
    }
    else if (this.state.value >= 25) {
      style = "warning"
    }
    else {
      style = "danger"
    }
    return (
      <Row>
        <Col xs={12} md={8}>
          <ProgressBar
            now={ value }
            max="100"
            min="0"
            bsStyle={ style }
            striped
            active
          />
        </Col>
        <Col xs={6} md={4}>
          <Button onClick={ this.handleIncrement } >
            { name }
          </ Button>
        </Col>
      </Row>
    )
  }
}

export default LifeBar
