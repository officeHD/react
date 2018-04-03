import React, {Component} from 'react'
import style from '../asset/css/index.less'
 import AppStore from '../../stores/AppStore';
import AppActionCreators from '../../actions/AppActionCreators';
import {getDataFromUrl,getCompanyList } from '../APIUtils';
import { Toast } from 'antd-mobile';
 

export default class Company extends Component {
    constructor(props){
        super(props);
        this.state = { 
          listShow:false,
        }   
    }
    changeList(text){
      
       if(text.sales.toString()!=="0"){
          getDataFromUrl("1","",text.gysName);
          this.props.onSelect()
          AppActionCreators.setcurrentPage(0)
       }else{
         Toast.info("暂无 "+text.productName+" 订单",2)
       }
    }
    render(){

      let listShows = this.props.company.map((text, index)=> {
       
        return (
            <li key={index} onClick={e => this.changeList(text)} >
                  <label>
                      <img src={`${ctx}/`+text.titleUrl }/>
                  </label>
                  <span className={style.name}>{text.productName}</span>
                  <span className={style.sales}>({text.sales})</span>
            </li>

          )
      })
        return (
          <div className={style.company}>
            {this.state.listShow?'':''}
            <ul className={style.company_ul}>
                {listShows}
            </ul> 

          </div>
        )
    }
}