import React, {Component} from 'react';
import style from '../asset/css/Insure.less';
 
 
export default class App extends Component {
     constructor(props){
        super(props);
    }
 
    render() {
        
        if(this.props.stakeholder.price01&&this.props.stakeholder.price02&&this.props.stakeholder.innumber){
            var  insurePrice=(this.props.stakeholder.price01+this.props.stakeholder.price02)*this.props.stakeholder.innumber
        }else{
            var insurePrice=200
        }
        return (
             
             
            <div className={style.bottom}>
                <button   className={style.white}>{insurePrice+" 元"}</button>
                <button  onClick={this.props.onClickHandle}> 立即投保 </button>
            </div>       
               
        )
    };
}