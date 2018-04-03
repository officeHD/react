import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeInsuranceCom, askOrders, choiceProduct } from '../actions'
import Plan2 from '../components/Plan2'
import Package from '../components/Package'
import Files from '../components/Files'

const Plan2Container = ({ car, productId, onChoiceProduct }) => (
  <Plan2 car={car}>
      {car.plan.map( plan =>
        <Package key={plan.customer} customer={plan.customer} stages={plan.stages}/>
      )}
      <Files />
  </Plan2>
)

const mapStateToProps = (state) => ({
  car: state.selectedCar,
  productId: state.productId,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChoiceProduct: (id) => {
    dispatch(choiceProduct(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plan2Container)
