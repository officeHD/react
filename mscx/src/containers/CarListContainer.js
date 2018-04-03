import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { choiceCar } from '../actions'
import CarImg from '../components/CarImg'
import CarList from '../components/CarList'

const CarListContainer = ({ carList, onChoiceCar }) => (
  <CarList>
    {carList.map(carData => {
      if (carData.id !== 10) {
        let height=document.querySelector('body').offsetWidth/(720/280);
        return (
          <CarImg height={height} key={carData.id} car={carData} onChoiceCar={onChoiceCar}/>
        )
      }
    }
    )}
  </CarList>
)

const mapStateToProps = state => ({
  carList: state.carList
})

const mapDispatchToProps = (dispatch, state) => ({
  onChoiceCar: (car) => {
    dispatch(choiceCar(car))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarListContainer)
