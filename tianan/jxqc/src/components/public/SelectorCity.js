import React, {Component} from 'react';
import SelectorInLine from './SelectorInLine';
import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import {getCitiesList} from '../APIUtils';

export default class Out extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['正在加载城市列表'],
        };

        this.onSelect = this.onSelect.bind(this)
        this.getCityString = this.getCityString.bind(this)

    };

    componentWillReceiveProps(nextProps) {

      if (nextProps.isShow) {
        let cityData = InsuranceStore.getStakeholder().cityDatas[nextProps.pro]
        if (!cityData) {
            Toast.loading('加载中...', 0);
            let cb = (msg) => {
                Toast.hide();
                //请求失败则关闭，并提示
                if (msg.result === 0) {
                    this.props.onClose()
                    Toast.fail('加载失败!!!', 1);
                } else {
                //请求成功，则设置城市信息
                    InsuranceActionCreators.updateCityDatas(nextProps.pro, msg);
                    
                    this.getCityString(msg);
                }
            }
            getCitiesList(nextProps.pro, cb);
        } else {
            this.getCityString(cityData)
        }
      }
    }

    getCityString(list) {
        let arr = list.map((ele, index) => {
            return ele.regionName
        })
        this.setState({
            options: arr,
        })
    }

    onSelect(obj) {
        let city = InsuranceStore.getStakeholder().cityDatas[this.props.pro][obj.index];
        let result = {
            name: city.regionName,
            no: city.regionNo
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