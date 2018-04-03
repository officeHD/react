import React, {Component} from 'react';
import style from '../asset/css/share.less';
 
 
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
      let info;
      if(this.props.planData.reciveName){
        if(this.props.planData.reciveSex==="女"){
          info=this.props.planData.reciveName+"女士"
        }else{
          info=this.props.planData.reciveName+"先生";
        }
      }else{
        info="";
      }
    
       return (
        <div className={style.cover}>
          <dl className={style.cover_inner}>
            <dd className={style.cover_title}>
              <img src="http://img.winbaoxian.com/autoUpload/planbook/resultCoverTil_8db33f9ca805866.png" />
            </dd> 
            <dd className={style.cover_bd} >
              <div className={style.cover_btn_wrap}>
                <i className={style.cover_btn} onClick={this.props.hideback}>亲启</i> <p>敬呈  {info}</p>
              </div>
            </dd>
          </dl>
        </div>
        )
    };
}