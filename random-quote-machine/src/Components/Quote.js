import React from 'react'

const Quote = ({quoteText, author, quoteClassName, authorClassName,componentClassName}) =>{
  return (
    <div className = {componentClassName}>
      <p className = {quoteClassName} > " {quoteText} "</p>
      <p className = {authorClassName} > {author}</p>
    </div>
  )

}

export default Quote
