import React from 'react'
import HandlerButtonsContainer from '../containers/HandlerButtonsContainer'

const Plan0 = ({car}) => (
  <div className="plan">
    <div className="blank"><span className="ads">年年换新车，月月有惊喜</span></div>    

    <div className="sub_title">报价及取车须知</div>
    <div className="blank">
      <table className="rent_table">
        <tbody>
          <tr>
            <td><span>市场指导价</span><label>￥{car.price}</label></td>
            <td><span>租期</span><label>12期</label></td>
          </tr>
          <tr>
            <td><span>保证金</span><label>￥{car.deposit}</label></td>
            <td><span>租金</span><label className="orange">￥{car.rent}/月</label></td>
          </tr>
          <tr>
            <td><span>预付</span><label>￥{car.advance}</label></td>
          </tr>

        </tbody>
      </table>
    </div>
    <HandlerButtonsContainer />
  </div>

)

export default Plan0