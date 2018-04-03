import React from 'react'

const OutPut = ({children, car}) => (
  <div className="plan">
    <div className="blank"><span className="ads">优惠多车型多 省钱更省心！</span></div>    

    <div className="sub_title">报价及取车须知</div>
    <div className="blank">
      <table className="rent_table">
        <tbody>
          <tr>
            <td><span>渠道低价</span><label>￥{car.cheap}</label></td>
          </tr>
          <tr>
            <td><span>最低付款总额</span><label>￥{car.first} (含购置税和保险)</label></td>
          </tr>
        </tbody>
      </table>
    </div>
    { children }
  </div>

)

export default OutPut