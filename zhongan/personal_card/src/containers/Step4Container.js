import { connect } from 'react-redux'
import { goToStep, changeIsLoading, changeIsOtherWay, sendData } from '../actions'
import Step4 from '../components/Step4'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  step: state.step,
  applyNum: data.ApplyNum[state.applyNum],
  sumPremium: (100 * data.ApplyNum[state.applyNum]).toFixed(2),
  balance: state.balance,
  isZACashier: state.isZACashier,
  url: state.url,
  isOtherWay: state.isOtherWay,
  insuredId: state.insuredId,
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(goToStep(4))
  },
 
  onChangeIsOtherWay: () => {
    dispatch(changeIsOtherWay())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step4)

export default Container