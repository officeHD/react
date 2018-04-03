import React, {Component} from 'react';
import style from '../asset/css/index.less'
export default class Out extends Component {
   constructor(props){
        super(props);  
    };
 	render() {
    let userinfo=this.props.staffmes;
        return (
          <div className={style.banner}>
               <img src={require(`../asset/img/banner.jpg`)} />
               <div className={style.banner_content}>
               		<div className={style.user_info}>
               			<span className={style.user_name}>{userinfo.name}</span><br/>
               			<span><img src={require(`../asset/img/position.png`)} />合肥</span> 
               		</div>
               		<div className={style.user_img}>
               			 <img src={require(`../asset/img/user.png`)} />
               		</div>
               		<div className={style.user_shop}>
               			<button><a>进入微店</a></button>
               		</div>
               </div>
          </div>
        );
    };

}