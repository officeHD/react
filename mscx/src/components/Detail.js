import React from 'react'
import TitleBarDetailContainer from '../containers/TitleBarDetailContainer'
import CarTopContainer from '../containers/CarTopContainer'
import PurchaseWaySwitcherContainer from '../containers/PurchaseWaySwitcherContainer'
import RentPlanContainer from '../containers/RentPlanContainer'

const Detail = () => (
  <div>
    <TitleBarDetailContainer />
    <CarTopContainer>
      <PurchaseWaySwitcherContainer />
    </CarTopContainer>
    <RentPlanContainer />

  </div>
)

export default Detail