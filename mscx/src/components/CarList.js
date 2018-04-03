import React from 'react'
import CarImg from './CarImg'

const CarList = ({children}) => (
  <ul className="car_list">
    {children}
  </ul>
)

export default CarList