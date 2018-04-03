import React from 'react'
import ItemTitle from './ItemTitle'
import HRC_HRDContainer from '../containers/HRC_HRDContainer'
import ADDCContainer from '../containers/ADDCContainer'
import AMRCContainer from '../containers/AMRCContainer'
import WAContainer from '../containers/WAContainer'
import WPAContainer from '../containers/WPAContainer'
import WPBContainer from '../containers/WPBContainer'
import WPContainer from '../containers/WPContainer'
import SelectorContainer from '../containers/SelectorContainer'
import style from './asset/css/index.less'
const OutPut = () => (
  <div className={style.plainAdd}>
    <ItemTitle path="plainAdd" title="附加险投保计划"/>
    <HRC_HRDContainer />
    <ADDCContainer />
    <AMRCContainer />
    <WAContainer />
    <WPAContainer />
    <WPBContainer />
    <WPContainer />
    <SelectorContainer />
  </div>
)

export default OutPut