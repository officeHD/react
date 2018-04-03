import React from 'react'

const CarTop = ({children, car}) => (
    
  <div className="car_top">
    <img src={`${ctx}/static/img/mscx/c${car.id}.jpg`} />
    <div className="car_name">
      <span>{car.name}</span>
      <label>
        {car.type === 0 || car.type === 1 ? children : null }
      </label>
    </div>
    <div className="car_info">
      {car.info}
    </div>
  </div>
)

export default CarTop