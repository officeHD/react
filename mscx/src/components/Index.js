import React from 'react'
import TitleBarIndexContainer from '../containers/TitleBarIndexContainer'
import FilterContainer from '../containers/FilterContainer'
import CarListContainer from '../containers/CarListContainer'
import OptionListContainer from '../containers/OptionListContainer'

const Index = () => (
  <div>
    <TitleBarIndexContainer />
    <FilterContainer />
    <CarListContainer />
    <OptionListContainer />
    
  </div>
)

export default Index