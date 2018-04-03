import React, {Component} from 'react';
import SelectorBank from '../public/SelectJob'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import style from '../asset/css/Insure.less'
import {getJob,getSmallJobList} from '../APIUtils';

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
            if(!this.props.bigjob){
                Toast.info("请选择职业大类",2)
           }else{
             this.setState({
                isShowBank: true,
            });
           }
        }else{
            Toast.info("请选择职业大类",2)
        }  
    }
    //选择银行操作
    selectBank(job) {
        if(this.props.type==="bbr"){
            InsuranceActionCreators.changeSelectBSmallJob(job);
        }else{
            InsuranceActionCreators.changeSelectSmallJob(job);
        }
        let cb = (msg) => {

            if (msg.result.toString() === '1') {
                console.log(msg.list)
                  InsuranceActionCreators.updateJogList(msg.list);    
            } 
        }
        
        let middleId=job.middle_job_classify_id;
        let smallId=job.small_job_classify_id;
        getJob(middleId,smallId,cb);
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
                    <input className={style.select_bank} placeholder="请选择职业小类" readOnly="readOnly" value={this.props.job.small_job_classify}   onClick={this.showBank} />
                </span>
                <SelectorBank
                    isShow={this.state.isShowBank} 
                    bank={this.props.jobs}
                    selected={this.props.job.name}
                    onClose={this.onClose} 
                    onSelect={this.selectBank}
                    type="small_job_classify"/>
            </div>
        );
    };
}
