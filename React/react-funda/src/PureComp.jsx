import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    // constructor(props){
    //     super(props)
    // }
  render() {
    console.log('pure component re rendered');
    
    return (
      <div>
        <h1>Hello I am Pure Component {this.props.name}</h1>
      </div>
    )
  }
}

export default PureComp
