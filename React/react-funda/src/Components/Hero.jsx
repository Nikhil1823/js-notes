import React from 'react'

const Hero = (props) => {

    if(props.name==='Joker'){
        throw new Error('Your not a hero , your a Legend !!!')
    }
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Hero
