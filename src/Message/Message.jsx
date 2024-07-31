import React, { Component } from 'react'

export class Message extends Component {
    state;

    constructor(props){
        super(props)
        this.state={
            message:"Welcome"
    }
  render() {
    return 
      <div>
        <h1>Message component</h1>
      </div>
    
  }

}

export default Message