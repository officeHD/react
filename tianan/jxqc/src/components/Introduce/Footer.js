import React ,{Component}from 'react'
import style from '../asset/css/introduce.less'
import { Icon } from 'antd-mobile';
import { Link } from 'react-router';
import AppActionCreators from '../../actions/AppActionCreators';

 
 export default class Instruction extends Component {
  constructor(props){
      super(props);
      
      this.leftPage = this.leftPage.bind(this); 
    }
    leftPage(){
       AppActionCreators.setTabPage('0');
    }
    centerPage(){
      AppActionCreators.setTabPage('2');
    }
    rightPage(){
      AppActionCreators.setTabPage('1');
    }
   render() {
    return (
      <div className={style.footer}>
        <ul>
          <li>
            <Link to="/SubFrame"  onClick={this.leftPage}>
               <Icon type={require(`../asset/svg/xuzhi.svg`)}/><br/>
               投保须知
             </Link>
          </li>
          <li>
            <Link to="/SubFrame" onClick={this.centerPage}>
              <Icon type={require(`../asset/svg/smile.svg`)}/><br/>
              理赔服务
            </Link>
            
          </li>
          <li>
            <Link to="/SubFrame" onClick={this.rightPage}>
              <Icon type={require(`../asset/svg/tiaokuan.svg`)}/><br/>
              保险条款
            </Link>
          </li>
        </ul>
      </div>     
    )}
 }   
  
 

 