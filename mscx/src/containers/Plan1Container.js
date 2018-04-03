import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeInsuranceCom, askOrders, choiceProduct } from '../actions'
import Plan1 from '../components/Plan1'
import Product from '../components/Product'

const Plan1Container = ({ car, productId, onChoiceProduct }) => (
  <Plan1 car={car}>
      {car.plan.map( product =>
        <Product key={product.id} product={product} selected={product.id === productId} onChoiceProduct={onChoiceProduct}/>
      )}
  </Plan1>
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
)(Plan1Container)
