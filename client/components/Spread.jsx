import React from 'react'
import { connect } from 'react-redux'

import Rune from './Rune'

class Spread extends React.Component {
  state = {
    position1: {},
    position2: {},
    position3: {},
    date: {}
  }

  render() {
    return (
      <Rune />
    )
  }
}

export default Spread 