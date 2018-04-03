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
	         	<dt>风险提示 <span className={style.sick} onClick={this.handelclick}>病种</span></dt>
           
             <dd className={style.prompt}>
              <p>
                投保人在保单犹豫期后解除合同会遭受一定损失。本计划书演示数据仅供参考，具体保单利益请以保单合同为准。
              </p>
            </dd>
	         </dl>
           <Sickdetail isShow={this.state.show} close={this.handelclick}/> 
   		</div>

        )
    };
}