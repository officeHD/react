import React, {Component} from 'react';
import SelectJob from '../public/SelectJob'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import style from '../asset/css/Insure.less'
import {getJobList,getSmallJobList} from '../APIUtils';

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
      getJobList();  
    };
    //展示银行选择器
    showBank() {
        this.setState({
            isShowBank: true,
        });
    }

   
    
    //选择银行操作
    selectBank(job) {
        if(job.job_type!=="拒保"){
            InsuranceActionCreators.changeSelectBigJob(job);
           
            let cb = (msg) => {
            if (msg.result.toString() === '1') {
                InsuranceActionCreators.updateSmallJogList(msg.list);    
            } 
        }
        getSmallJobList(job.middle_job_classify_id,cb);
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
                    <input className={style.select_bank} placeholder="请选择职业大类" readOnly="readOnly" value={this.props.job.middle_job_classify}   onClick={this.showBank} />
                </span>
                <SelectJob
                    isShow={this.state.isShowBank} 
                    bank={this.props.jobs}
                    selected={this.props.job.name}
                    onClose={this.onClose} 
                    onSelect={this.selectBank}
                    type="middle_job_classify"
                    />
                 
            </div>
        );
    };
}
