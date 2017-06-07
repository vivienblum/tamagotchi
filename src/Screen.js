import React, { Component } from 'react'
import { Alert, Grid } from 'react-bootstrap'

import LifeBar from './LifeBar.js'

class Screen extends Component {
  state = {
    alive: true
  }

  handleEnd = () => {
    this.toggleLife()
  }

  toggleLife = () => {
    this.setState(prevState => ({ alive: !prevState.alive }))
  }

  render() {
    const alive = this.state.alive
    if (alive) {
      return (
        <Grid>
          <LifeBar
            name="feed"
            onEnd={ this.handleEnd }
          />
          <LifeBar
            name="sleep"
            onEnd={ this.handleEnd }
          />
          <LifeBar
            name="enjoy"
            onEnd={ this.handleEnd }
          />
        </Grid>
      )
    }
    else {
      return (
        <Alert bsStyle="danger">
          <strong>You are dead!</strong> Try nextime, bad master.
        </Alert>
      )
    }
  }
}

export default Screen
