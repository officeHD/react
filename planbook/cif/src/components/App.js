import React from 'react'
import TitleBarContainer from '../containers/TitleBarContainer'
import InsuredContainer from '../containers/InsuredContainer'
import ApplicantContainer from '../containers/ApplicantContainer'
import PlainMainContainer from '../containers/PlainMainContainer'
import PlainAdds from './PlainAdds'
import AgentContainer from '../containers/AgentContainer'
import OccupationContainer from '../containers/OccupationContainer'
import LoadingContainer from '../containers/LoadingContainer'
import GenerateBtnContainer from '../containers/GenerateBtnContainer'
import Banner from './Banner'

const OutPut = () => (
  <div>
    <TitleBarContainer />

    <Banner />

    <InsuredContainer />

    <ApplicantContainer />

    <PlainMainContainer />

    <PlainAdds />

    <AgentContainer />

    <GenerateBtnContainer />

    <OccupationContainer />

    <LoadingContainer />
  </div>
)

export default OutPut