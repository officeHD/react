import React from 'react'

const Option = ({option, selectedOptionId, onChoice}) => (
    
  <li className={option.id === selectedOptionId ? 'selected' : ''} onClick={e => onChoice(option.id)}>{option.text}</li>
)

export default Option