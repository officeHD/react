import React from 'react'

const InputBox = ({ type = "text", val, className, onChangeVal=e=>console.log(e),onBlurChange=e=>console.log(e), maxLength = "", tip = "请输入" }) => (
    <input className={className} type={type} maxLength={maxLength} placeholder={tip} value={val}
        onBlur={e => onBlurChange((e.target.value).trim())}
        onChange={e => onChangeVal((e.target.value).trim())}
    />
)

export default InputBox