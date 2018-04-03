import React from 'react'
import Option from './Option'

const OptionList = ({children, showOptionList}) => (
  <ul className={showOptionList ? 'option_list' : 'hide'}>
    {children}
  </ul>
)

export default OptionList