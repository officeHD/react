import React, {Component} from 'react';
import SelectJobListLine from './SelectJobListLine';
import bank from '../asset/json/jobList'

export default class Out extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this)
        this.render = this.render.bind(this)
    };

    onSelect(obj) {
        let province = this.props.bank[obj.index];
        
        this.props.onSelect(province)
    }

    render() {
        let type=this.props.type;
        if(this.props.bank){
           var arr = this.props.bank.map((ele, index) => {
            if(type==="middle_job_classify"){

                return ele.middle_job_classify
            }else if(type==="small_job_classify"){
                return ele.small_job_classify
            }else{
                return ele.job
            }
        })
        } else{
             var arr = bank.map((ele, index) => {
                return ele.job
            })
        }
        return (
                <div>

                
                <SelectJobListLine 
                    isShow={this.props.isShow} 
                    options={arr} 
                    selected={this.props.selected} 
                    onClose={this.props.onClose} 
                    onSelect={this.onSelect}/>
                </div>
             
        );
    };
}