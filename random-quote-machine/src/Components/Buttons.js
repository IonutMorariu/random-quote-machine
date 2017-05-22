import React from 'react'

const Buttons = ({loadNewQuote, postQuote, quoteButtonClass, tweetButtonClass})=>{
  return(
    <div>
  <button className = {quoteButtonClass} onClick = {loadNewQuote}> Nueva cita</button>
  <button className = {tweetButtonClass} onClick = {postQuote}>Tweetear cita</button>
</div>
)
}

export default Buttons
