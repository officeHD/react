import React, { PropTypes } from 'react'

const TitleBar = ({ title, goBack, onShow }) => {

  return (
    <div className="title_bar" style={{display: 'none'}}>
      <button className="go_back" id= "go_back" type="button" onClick={goBack}> </button>
      <h1>{title}</h1>
    </div>
  )
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
}

export default TitleBar