import React, { Component } from "react";


export class ErrorBoundary extends Component {
  constructor () {
    super ()
    this.state = {
      hasError: false,
    }
  }


  render () {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good</h1>
    } 
    return this.props.children      
  }
}