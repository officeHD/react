import React, {Component} from 'react';
import SelectorInLine from './SelectorInLine';
import Provinces from '../asset/json/provinces'

export default class Out extends Component {
    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this)

    };

    onSelect(obj) {
        let province = Provinces[obj.index];
        
        this.props.onSelect(province)
    }

    render() {
        let arr = Provinces.map((ele, index) => {
            return ele.name
        })
        
        return (
            <SelectorInLine 
                isShow={this.props.isShow} 
                options={arr} 
                selected={this.props.selected} 
                onClose={this.props.onClose} 
                onSelect={this.onSelect}/>
        );
    };
}