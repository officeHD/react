import React from 'react'

const More = ({ more }) => {
    if (!more) {
        return null
    }
    let morelist = more.map((item, index) => {
        return (<p key={index}>{item}</p>)
    })
    return (<div>{morelist}</div>)
}

export default More