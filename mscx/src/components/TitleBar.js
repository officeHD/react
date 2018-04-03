import React from 'react'

const TitleBar = ({title, more, showParameter, onGoBack, onToggle}) => (
  <div className="title_bar">
    <button className="go_back" type="button" onClick={onGoBack}> </button>
    <h1>{title}</h1>
    {more ? <button className="more" type="button" onClick={onToggle}>{showParameter ? '租赁' : '详情'}</button> : null}
  </div>
)

export default TitleBar