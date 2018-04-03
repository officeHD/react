import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <div>
      	<div className={style.payment}>
     
      		<div className={style.payment_box}>
      		 <div className={style.payment_content}>
      		 	<h3>
      		 		初始费用
      		 	</h3>
      		 	<p>
      		 		为您所缴纳保险费的1%
      		 	</p>
	         </div>
         	</div>
         	<div className={style.payment_box}>
         	<div className={style.payment_content}>
         		<h3>
      		 		保单管理费
      		 	</h3>
      		 	<p>
      		 		不收取
      		 	</p>
	         </div>
         	</div>
         	
	        
	       </div>  
	         
	     <div className={style.payment}> 
	     <div className={style.payment_box}>
         		<div className={style.payment_content}>
	         		<h3>
	      		 		风险保险费
	      		 	</h3>
	      		 	<p>
	      		 		风险保险费低
	      		 	</p>
		         </div>
         	</div>
         	<div className={style.payment_box}>
         		<div className={style.payment_content}>
	         		<h3>
	      		 		持续奖金
	      		 	</h3>
	      		 	<p>
	      		 		第五个保险年度末，按保单账户价值1%发放
	      		 	</p>
		        </div>
         	</div>
      	</div>
      </div>

    )
  }
}