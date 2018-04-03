import React, {Component} from 'react';
import Sickdetail from './Sickdetail';
import style from '../asset/css/share.less';
export default class Payment extends Component {
    constructor(props){
        super(props); 
        this.state={
          show:false
        }
        this.handelclick=this.handelclick.bind(this); 
    }
    handelclick(){
      this.setState({
          show:!this.state.show,
      })
    }
    render() {
       return (
        <div className={style.person}>
	         <dl className={style.insureInfo}>
	         	<dt>健康保障 <span className={style.sick} onClick={this.handelclick}>病种</span></dt>
           
              
              <dd className={style.infolist}>82种重疾保障，守护您的健康</dd>
               
             
              <dd className={style.infolist}>42种轻症保障，更添一份关爱</dd>
              <dd className={style.infolist}>疾病终末期保障，维护生命尊严</dd>
              
             
	         </dl>
           <Sickdetail isShow={this.state.show} close={this.handelclick}/> 
   		</div>

        )
    };
}