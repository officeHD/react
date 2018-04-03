import React, {Component} from 'react';
import SelectorBank from '../public/SelectBank'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import style from '../asset/css/Insure.less'
import {getBankList,getBankProvince} from '../APIUtils';

export default class IndexDesk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowBank: false,
             
        };
        this.showBank = this.showBank.bind(this);
        this.selectBank = this.selectBank.bind(this);
        this.onClose = this.onClose.bind(this)
    };
     componentDidMount() {    

      getBankList();  
      
    };
    //展示银行选择器
    showBank() {
       
        this.setState({
            isShowBank: true,
        });
    }

   
    
    //选择银行操作
    selectBank(bank) {
        InsuranceActionCreators.changeCardBank(bank);
        
        let cb = (msg) => {
           
            //请求失败则关闭，并提示
            if (msg.result.toString() === '1') {
               
                  InsuranceActionCreators.updateProvinceDatas(bank.id, msg.list);    
            } 
        }

        getBankProvince(bank.id,cb);
    }
    //关闭选择器
    onClose() {
        this.setState({
            isShowBank: false,
        })
    }
    
    render() {

        return (
            <div className={style.place}>
                <span className={style.selections}>
                    <input className={style.select_bank} placeholder="请选择开户行" readOnly="readOnly" value={this.props.bank.name}   onClick={this.showBank} />
                    
                </span>
                <SelectorBank
                    isShow={this.state.isShowBank} 
                    bank={this.props.banks}
                    selected={this.props.bank.name}
                    onClose={this.onClose} 
                    onSelect={this.selectBank}/>
                 
            </div>
        );
    };
}
