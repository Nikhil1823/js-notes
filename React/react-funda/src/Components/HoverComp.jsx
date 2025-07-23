import React, { Component } from 'react'
import hocWrapper from '../Utils/ClickerHOC'
class HoverComp extends Component {
  render() {
      const {count,incrementCount}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>You Hovered {count}s times</h1>
      </div>
    )
  }
}

export default  hocWrapper(HoverComp,4)