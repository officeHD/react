import React, {Component} from 'react';
import SelectBankListLine from './SelectBankListLine';
import bank from '../asset/json/bankList'

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
        if(this.props.bank){
           var arr = this.props.bank.map((ele, index) => {
                return ele.name
            })
        } else{
             var arr = bank.map((ele, index) => {
                return ele.name
            })
        }
        return (
                <div>
                <SelectBankListLine 
                    isShow={this.props.isShow} 
                    options={arr} 
                    selected={this.props.selected} 
                    onClose={this.props.onClose} 
                    onSelect={this.onSelect}/>
                </div>
             
        );
    };
}