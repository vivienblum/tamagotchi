import React, { Component } from 'react'

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
        <LifeBar
          name="feed"
          onEnd={ this.handleEnd }
        />
      )
    }
    else {
      return (
        <h1>DEAD</h1>
      )
    }
  }
}

export default Screen
