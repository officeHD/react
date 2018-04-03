import { connect } from 'react-redux'
import { changePersonPremium, changeCards, checkAnKang } from '../actions'
import Cards from '../components/Cards'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  applyNum: data.ApplyNum[state.applyNum],
  balance: state.balance,
  personPremium: state.personPremium,
  cards: state.cards,
})

const mapDispatchToProps = (dispatch) => ({
  onChangePersonPremium: (val) => {
    dispatch(changePersonPremium(val))
  },
  onChangInput: (index, item, val) => {
    dispatch(changeCards(index, item, val))
  },
  onSubmitCards: () => {
    dispatch(checkAnKang())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default Container