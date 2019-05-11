import { connect } from 'react-redux'
import { changeAttentionA, changeAttentionB } from '../actions'
import Attention from '../components/Attention'

const mapStateToProps = (state) => {
    return ({
        varietyCode: sessionStorage.varietyCode,
        attendData: state.attendData,
    })
}

const mapDispatchToProps = (dispatch) => ({
    onchangeA: () => {
        dispatch(changeAttentionA())
    },
    onchangeB: () => {
        dispatch(changeAttentionB())
    }
})

const AttentionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Attention)

export default AttentionContainer