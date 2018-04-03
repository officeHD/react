import React, {Component} from 'react';
import SelectorInLine from './SelectorInLine';
import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import { getCountiesList } from '../APIUtils';

export default class Out extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['正在加载区县列表'],
        };

        this.onSelect = this.onSelect.bind(this)
        this.getCountyString = this.getCountyString.bind(this)

    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.isShow) {
        let date = InsuranceStore.getStakeholder().countyDatas[nextProps.city]
        if (!date) {
            let cb = (msg) => {
                InsuranceActionCreators.updateCountyDatas(nextProps.city, msg);
                this.getCountyString(msg);
                Toast.hide();
            }
            Toast.loading('加载中...', 0);
            getCountiesList(nextProps.city, cb);
        } else {
            this.getCountyString(date)
        }
      }
    }

    getCountyString(list) {
        let arr = list.map((ele, index) => {
            return ele.countyName
        })
        this.setState({
            options: arr,
        })
    }

    onSelect(obj) {
        
        let county = InsuranceStore.getStakeholder().countyDatas[this.props.city][obj.index];
        let result = {
            name: county.countyName,
            no: county.countyNo
        }
        this.props.onSelect(result)
    }

    render() {

        return (
            <SelectorInLine 
                isShow={this.props.isShow} 
                options={this.state.options} 
                selected={this.props.selected} 
                onClose={this.props.onClose} 
                onSelect={this.onSelect}/>
        );
    };
}