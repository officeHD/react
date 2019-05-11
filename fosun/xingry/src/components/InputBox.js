import React from 'react'

const InputBox = ({ val,className, onChangeVal, tip, maxLength, params }) => (
  <input className={className} type="text" placeholder={tip ? tip : '请输入'} value={val} onChange={e => onChangeVal((e.target.value).trim(), params)} maxLength={maxLength} />
)

export default InputBox