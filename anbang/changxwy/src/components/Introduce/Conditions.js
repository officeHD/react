import React, {Component} from 'react'
import style from '../asset/css/introduce.less'
import ShowController from './ShowController'
import Condition from './Condition'
export default class Out extends Component {  
    render(){ 
      return (
        <div className={style.detail}>
          <Condition title="重疾保险金" tip="最高50万" more="被保险人在180天等待期后因非意外原因首次确诊为合同所列的一种或多种重大疾病，立即赔付约定保额，同时本合同终止。"/>
          <Condition title="身故保险金" tip="最高50万" more="等待期后，若被保险人18岁前身故，保险按照累计已交保费给付身故保险金，若被保险人18岁后身故，保险按照基本保额给付身故保险金。"/>
          <Condition title="轻症保险金" tip="重疾保额20%" more="被保险人在180天等待期后因非意外原因首次确诊为合同所列的轻症疾病，立即赔付约定保额的20%，每种轻症疾病限给付一次，给付后该种轻症疾病保险责任终止。不同轻症疾病可以多次给付，但本合同的轻症疾病保险金累积给付以三次为限，当累积给付的轻症疾病保险金达到三次时，轻症疾病保险责任终止。"/>
          <Condition title="可选轻症疾病保费豁免" tip="豁免后期保费" more="被保险人在180天等待期后因非意外原因首次确诊为合同所列的轻症疾病，重症/其余轻症保障不变，免交剩余保费。"/>
        </div>
         
      )
    }
}