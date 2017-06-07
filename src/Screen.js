import React, { Component } from 'react'

import LifeBar from './LifeBar.js'

class Screen extends Component {
  handleEnd = () => {
    console.log("dead")
  }


  render() {
    return (
      <LifeBar
        name="feed"
        onEnd={ this.handleEnd }
      />
    )
  }
}

export default Screen
