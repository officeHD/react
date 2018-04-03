import React, {Component} from 'react';
import SelectJob from '../public/SelectJob'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import style from '../asset/css/Insure.less'
import {getJob} from '../APIUtils';

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
    //展示银行选择器
    showBank() {
        if(this.props.jobs){
            if(!this.props.smalljob){
                Toast.info('请选择职业类别',1);
            }else{
                this.setState({
                    isShowBank: true,
                }); 
            } 
        }else{
            Toast.info('请选择职业类别',1);
        }
        
    }
    //选择银行操作
    selectBank(job) {


         if(job.job_type!=="拒保"){
            if(this.props.type==="bbr"){
                InsuranceActionCreators.changeSelectBJob(job);
            }else{
                InsuranceActionCreators.changeSelectJob(job);
            }
            
         }else{
            Toast.info("请选择非拒保行业",2)
         }
      
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
                    <input className={style.select_bank} placeholder="请选择职业" readOnly="readOnly" value={this.props.job.job}  onClick={this.showBank} />
                </span>

                    <SelectJob
                    isShow={this.state.isShowBank} 
                    bank={this.props.jobs}
                    selected={this.props.job.name}
                    onClose={this.onClose} 
                    onSelect={this.selectBank}/>
              
                
            </div>
        );
    };
}
