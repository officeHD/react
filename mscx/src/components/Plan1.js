import React from 'react'
import HandlerButtonsContainer from '../containers/HandlerButtonsContainer'

const Plan1 = ({children, car}) => (
  <div className="plan">
    <div className="blank"><span className="ads">优惠多车型多 省钱更省心！</span></div>    

    <div className="sub_title">报价及取车须知</div>
    <div className="blank">
      <table className="rent_table">
        <tbody>
          <tr>
            <td><span>市场指导价</span><label>￥{car.price}</label></td>
            <td><span>包牌</span><label>￥{car.bao}</label></td>
          </tr>
        </tbody>
      </table>
    </div>
    { children }
    <HandlerButtonsContainer />
  </div>

)

export default Plan1