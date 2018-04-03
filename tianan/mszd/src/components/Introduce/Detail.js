import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';

export default class Out extends Component{
  constructor(props) {
    super(props);
  };
  ClickOption(val){
    InsuranceActionCreators.changeinsureTyoe(val);
  };
  changeinsureAge(val){
    InsuranceActionCreators.changeinsureAge(val);
  }
  render() {
    let stakeholder=this.props.stakeholder;
    return(
      <ul className={style.blank_ul}>
        <li className={style.blank_li_title}>{this.props.company.product}</li>   
        <li>
          <label>投保年龄</label> 
          <div className="pull_right"> 
            <span 
              className={`${stakeholder.insureAge===1?style.checked:""} ${style.radio}`} 
              onClick={e =>this.changeinsureAge(1)}>3-6周岁</span>
            <span 
              className={`${stakeholder.insureAge===2?style.checked:""} ${style.radio}`} 
              onClick={e =>this.changeinsureAge(2)}>7-23周岁</span>
          </div>
          
        </li>   
        <li>
           <label>计划</label>
           <div className="pull_right"> 
            <span 
              className={`${stakeholder.insureType===1?style.checked:""} ${style.radio}`} 
              onClick={e =>this.ClickOption(1)}>省心版</span>
            <span 
              className={`${stakeholder.insureType===2?style.checked:""} ${style.radio}`} 
              onClick={e =>this.ClickOption(2)}>安心版</span>
          </div>              
        </li>   
        <li><label>保险期限</label> <span className="pull_right">一年</span></li>   
      </ul>
    )
  }
}