import React, { Component } from 'react'

import ButtonContainer from 'q-sig-button'

export default class App extends Component {
  render () {
    return (
      <div>
       <ButtonContainer>
            <span className="mr-2 text-white">
                <i className="fas fa-cart-plus"/>
                My cart
            </span>
        </ButtonContainer>
      </div>
    )
  }
}
