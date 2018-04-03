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
	         	<dt>保费豁免 <span className={style.sick} onClick={this.handelclick}>病种</span></dt>
           
             <dd className={style.infolist}>若投保人发生轻症、重疾、身故或高残，则免交后期所有保费，合同继续有效  </dd>
              <dd className={style.prompt}>
              <p>
                豁免保费，人性设计，特殊关爱
              </p>
            </dd>
	         </dl>
           <Sickdetail isShow={this.state.show} close={this.handelclick}/> 
   		</div>

        )
    };
}