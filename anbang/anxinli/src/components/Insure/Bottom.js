import React, {Component} from 'react';
import style from '../asset/css/Insure.less';
 
 
export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let  insurePrice=this.props.stakeholder.price 
        return (
            <div className={style.bottom}>
                <button   className={style.white}>{insurePrice+" 元"}</button>
                <button  onClick={this.props.onClickHandle}> 立即投保 </button>
            </div>       
               
        )
    };
}