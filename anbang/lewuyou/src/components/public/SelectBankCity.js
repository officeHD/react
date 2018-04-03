import React, {Component} from 'react';
import SelectorInLine from './SelectorInLine';
import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import {getBankCity,getBankList} from '../APIUtils';

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
                }else {
                //请求成功，则设置城市信息
                    if(msg.result === 2){
                        // 设置直辖市
                        InsuranceActionCreators.updateProvinceDatas(nextProps.pro,InsuranceStore.getStakeholder().cityDatas);
                        //更新市数据
                        this.getCityString(InsuranceStore.getStakeholder().cityDatas);
  
                    }else{
                        InsuranceActionCreators.updateCityDatas(nextProps.pro, msg.list);
                        this.getCityString(msg.list);
                    }
                   
                }
            }
            // getCitiesList(nextProps.pro, cb);
            getBankCity(nextProps.unionBankId,nextProps.pro,cb);
        } else {
            this.getCityString(cityData)
        }
      }
    }

    getCityString(list) {
        let arr = list.map((ele, index) => {
            return ele.name
        })
        this.setState({
            options: arr,
        })
    }

    onSelect(obj) {
        let city = InsuranceStore.getStakeholder().cityDatas[this.props.pro][obj.index];
        let result = {
            name: city.name,
            no: city.id
        }
        this.props.onSelect(result)
         getBankList(this.props.unionBankId,this.props.pro ,result.no);
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