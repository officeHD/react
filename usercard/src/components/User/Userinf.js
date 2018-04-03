import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast } from 'antd-mobile';
export default class Userinf extends Component {
     constructor(props){
        super(props);
        
        
    };
 	render() {
    let userinfo=this.props.staffmes;
        return (
          <div className={style.info}>
            <div className={style.info_content}>
              <div className={style.title}>
                <span className={style.job}>民盛保险代理有限公司-专属代理</span>   <a href="">关于民盛 </a> 
              </div>
              <div className={style.contact}>
                <span className={style.contact_list}>
                      <img src={require(`../asset/img/tel.png`)} />
                      <a  href={"tel:"+userinfo.phoneNum}>{userinfo.phoneNum}</a>
                </span> <br/>
                <span className={style.contact_list}>
                      <img src={require(`../asset/img/wechat.png`)} />
                      
                      <a  href={"tel:"+userinfo.phoneNum}>{userinfo.phoneNum}</a>
                </span> 
              </div>
            </div>
          </div>
        );
    };

}