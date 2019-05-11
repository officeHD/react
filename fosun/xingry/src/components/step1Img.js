import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import UploadImgContainer from '../containers/UploadImgContainer'
 
import LoadingContainer from '../containers/LoadingContainer'
import style from './asset/css/index.less'
import Footer from './public/Footer'

const Step1 = ({ fee, onGoToStep }) => (
  <div className={style.pbottom}>
    <TitleBarStepContainer />
    <UploadImgContainer /> 
   
    <ul className={style.bottom_btns} >
      <li> {fee} 元</li>
      <li onClick={onGoToStep} className={style.normal}> 下一步 </li>
    </ul>
   
    
    <LoadingContainer />
  </div>
)
export default Step1