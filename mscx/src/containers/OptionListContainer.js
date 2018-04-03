import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeFilterOption } from '../actions'
import Option from '../components/Option'
import OptionList from '../components/OptionList'

const OptionListContainer = ({ optionList, showOptionList, selectedOptionId, onChoice }) => (
  
  <OptionList showOptionList={showOptionList}>
    {optionList.map(option =>
      <Option key={option.text} option={option} selectedOptionId={selectedOptionId} onChoice={onChoice}/>
    )}
  </OptionList>
)

const mapStateToProps = state => ({
  optionList: state.optionList,
  showOptionList: state.showOptionList,
  selectedOptionId: state.selectedOptionId,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChoice: (id) => {
    dispatch(changeFilterOption(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionListContainer)
