import React, { PropTypes } from 'react'

const Output = ({entity, onGetPolicyUrl}) => {
  return (
    <div className="info">
      <div className="top">
        <span className="insured_id">保险单ID</span>
        <span>{entity.policyId}</span>
        {entity.stateFlag === '3' || entity.stateFlag === '7' ?(entity.type==='3'?<button><a  style={{color:"white"}} href={entity.policyUrl} target="_blank">保单下载</a></button>:<button type="button" onClick={onGetPolicyUrl}>保单下载</button>)
        : null}
        <div className="border_bottom"></div>
      </div>

      <table className="first_table">
        <tbody>
          <tr>
            <td>保单编号</td>
            <td>{entity.policyNo}</td>
          </tr>
          <tr>
            <td>支付方式</td>
            <td>{entity.paymentWay}</td>
          </tr>
          <tr>
            <td>支付时间</td>
            <td>{entity.payTime}</td>
          </tr>
        </tbody>
      </table>

      <div className="sub_title">保险产品信息</div>

      <table>
        <tbody>
          <tr>
            <td>产品名称</td>
            <td>{entity.packageName}</td>
          </tr>
          <tr>
            <td>保险起期</td>
            <td>{entity.effectiveDate}</td>
          </tr>
          <tr>
            <td>保险止期</td>
            <td>{entity.expiryDate}</td>
          </tr>
        </tbody>
      </table>
      {entity.type === "0" && entity.holderType === '1' && entity.customerInfo ? <div className="sub_title">投保人信息</div> : null }
      {entity.type === "0" && entity.holderType === '1' && entity.customerInfo ? 
      <table>
        <tbody>
          <tr>
            <td>投保人类型</td>
            <td>{entity.customerInfo.holderTypeName}</td>
          </tr>
          <tr>
            <td>投保人姓名</td>
            <td>{entity.customerInfo.holderName}</td>
          </tr>
          <tr>
            <td>证件类型</td>
            <td>{entity.customerInfo.holderCertiTypeName}</td>
          </tr>
          <tr>
            <td>证件号码</td>
            <td>{entity.customerInfo.holderCertiNo}</td>
          </tr>
          <tr>
            <td>电话</td>
            <td>{entity.customerInfo.contactPhone}</td>
          </tr>
          <tr>
            <td>邮箱</td>
            <td>{entity.customerInfo.contactEmail}</td>
          </tr>
        </tbody>
      </table>
      : null }

      {entity.type === "0" && entity.holderType === '2' && entity.customerInfo ? <div className="sub_title">投保企业信息</div> : null }
      {entity.type === "0" && entity.holderType === '2' && entity.customerInfo ? 
      <table>
        <tbody>
          <tr>
            <td>企业名称</td>
            <td>{entity.customerInfo.holderName}</td>
          </tr>
          <tr>
            <td>证件类型</td>
            <td>{entity.customerInfo.holderCertiTypeName}</td>
          </tr>
          <tr>
            <td>证件号码</td>
            <td>{entity.customerInfo.holderCertiNo}</td>
          </tr>
          <tr>
            <td>所在省份</td>
            <td>{entity.customerInfo.contactProvinceName}</td>
          </tr>
          <tr>
            <td>所在城市</td>
            <td>{entity.customerInfo.contactRegionName}</td>
          </tr>
          <tr>
            <td>所在区县</td>
            <td>{entity.customerInfo.contactCountyName}</td>
          </tr>
          <tr>
            <td>详细地址</td>
            <td>{entity.customerInfo.contactAddress}</td>
          </tr>
        </tbody>
      </table>
      : null }

      {(entity.type === "1" ||entity.type === '2' )&& entity.policyHolder ? 
      <table>
        <tbody>
          <tr>
            <td>投保人姓名</td>
            <td>{entity.policyHolder.holderName}</td>
          </tr>
          <tr>
            <td>证件类型</td>
            <td>{entity.policyHolder.holderCertiTypeName}</td>
          </tr>
          <tr>
            <td>证件号码</td>
            <td>{entity.policyHolder.holderCertiNo}</td>
          </tr>
          <tr>
            <td>联系电话</td>
            <td>{entity.policyHolder.holderPhone}</td>
          </tr>
          <tr>
            <td>电子邮箱</td>
            <td>{entity.policyHolder.holderEmail}</td>
          </tr>
        </tbody>
      </table>
      : null }

      {(entity.type === "1" ||entity.type === '2' ) && entity.insurantList.length ?
      <div className="sub_title">被保人信息</div>
      : null }

      {(entity.type === "1" ||entity.type === '2' ) && entity.insurantList.length ?
      <table>
        <tbody>
          <tr>
            <td>是投保人的</td>
            <td>{entity.insurantList[0].insuredRelaToHolderName}</td>
          </tr>
          <tr>
            <td>职业类别</td>
            <td>{entity.insurantList[0].occupationCategory ? (entity.insurantList[0].occupationCategory).split('|')[1] : ''}</td>
          </tr>
          <tr>
            <td>被保人姓名</td>
            <td>{entity.insurantList[0].insurantName}</td>
          </tr>
          <tr>
            <td>证件类型</td>
            <td>{entity.insurantList[0].insurantCertiTypeName}</td>
          </tr>
          <tr>
            <td>证件号码</td>
            <td>{entity.insurantList[0].insurantCertiNo}</td>
          </tr>
          <tr>
            <td>联系电话</td>
            <td>{entity.insurantList[0].insurantPhone}</td>
          </tr>
        </tbody>
      </table>
      : null }

      {entity.type === "0" && entity.customerInfo && entity.customerInfo.holderType === '2' ?
      <div className="sub_title">企业联系人信息</div>
      : null }

      {entity.type === "0" && entity.customerInfo && entity.customerInfo.holderType === '2' ?
      <table>
        <tbody>
          <tr>
            <td>联系人</td>
            <td>{entity.customerInfo.contactPeople}</td>
          </tr>
          <tr>
            <td>联系人证件</td>
            <td>{entity.customerInfo.contactCertiTypeName}</td>
          </tr>
          <tr>
            <td>证件号码</td>
            <td>{entity.customerInfo.contactCertiNo}</td>
          </tr>
          <tr>
            <td>联系电话</td>
            <td>{entity.customerInfo.contactPhone}</td>
          </tr>
          <tr>
            <td>电子邮箱</td>
            <td>{entity.customerInfo.contactEmail}</td>
          </tr>
        </tbody>
      </table>
      : null }
      
      {entity.type === "0" && entity.customerInfo ?
      <div className="sub_title">驾乘车辆信息</div>
      : null }

      {entity.type === "0" && entity.customerInfo ? 
      <table>
        <tbody>
          <tr>
            <td>车辆类型</td>
            <td>{entity.customerInfo.carTypeName}</td>
          </tr>
          <tr>
            <td>使用性质</td>
            <td>{entity.customerInfo.usingTypeName}</td>
          </tr>
          <tr>
            <td>座位数</td>
            <td>{entity.customerInfo.approvedSeats}</td>
          </tr>
          <tr>
            <td>车牌号码</td>
            <td>{entity.customerInfo.plateNumber}</td>
          </tr>
          <tr>
            <td>车架号</td>
            <td>{entity.customerInfo.vinNo}</td>
          </tr>
          <tr>
            <td>发动机号</td>
            <td>{entity.customerInfo.engineNumber}</td>
          </tr>
        </tbody>
      </table>
      : null }

      <div className="sub_title">保障责任信息</div>

      <table>
        <tbody>
          <tr>
            <td>份数</td>
            <td>{entity.applyNum}</td>
          </tr>
          <tr>
            <td>保费</td>
            <td>{entity.sumPremium}元</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Output