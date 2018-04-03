import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <div className={style.table}>
          <p>
            王女士在女儿满月时为孩子购买了10份安邦乐无忧少儿重大疾病保险产品计划，只需回答简单的健康告知问题，不需要体检，在网上填写信息就完成投保。王女士共交费7630元，该产品保险期间从保险合同生效之日起至孩子满25周岁后的首个保单周年日，具体保障如下：
          </p>
         <table>
           <thead>
              <tr>
               <th>保险责任</th>
               <th>保额</th>
              </tr>
           </thead>
           <tbody>
             <tr>
               <td>满期保险金</td>
               <td>8011.5元</td>
                
             </tr>
             <tr>
               <td>25种少儿常见重大疾病保险金</td>
               <td>20万元</td>
                
             </tr>
             <tr>
               <td>身故/全残保险金 </td>
               <td>10万元</td>
             </tr>
           </tbody>
         </table>
         <table>
           <thead>
              <tr>
               <th>产品名称</th>
               <th>批复文号</th>
               <th>备案编号</th>
              </tr>
           </thead>
           <tbody>
             <tr>
               <td>安邦乐无忧1号少儿两全保险</td>
               <td>安邦人寿发[2012]192号-2</td>
               <td>安邦人寿[2012]年金保险018号</td>
                
             </tr>
             <tr>
               <td>安邦附加乐无忧1号少儿重大疾病保险</td>
               <td>安邦人寿发[2012]192号-3</td>
               <td>安邦人寿[2012]疾病保险019号</td>
             </tr>
             
           </tbody>
         </table>
      </div>
    )
  }
}