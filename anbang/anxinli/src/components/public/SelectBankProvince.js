import React, {Component} from 'react';
import SelectorInLine from './SelectorInLine';
import Provinces from '../asset/json/provinces';
import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import {getBankProvince,getBankCity} from '../APIUtils';

export default class Out extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['正在加载省份列表'],
        };
        this.onSelect = this.onSelect.bind(this)
        this.getCityString = this.getCityString.bind(this)
    };
    componentWillReceiveProps(nextProps) {

      if (nextProps.isShow) {
        let provinceData = nextProps.bankprovinceDatas[nextProps.unionBankId] ;
        if (!provinceData) {
            if(!nextProps.unionBankId){
                Toast.info('请选择开户行',1)
            }else{
                Toast.loading('加载中...', 0);
                let cb = (msg) => {
                    Toast.hide();
                    //请求失败则关闭，并提示
                    if (msg.result === 0) {
                        this.props.onClose()
                        Toast.fail('加载失败!!!', 1);
                    }else {
                    //请求成功，则设置省份的信息
                        InsuranceActionCreators.updateProvinceDatas(nextProps.pro, msg.list);
                        this.getCityString(msg.list);  
                    }
                }
                // getCitiesList(nextProps.pro, cb);
                getBankProvince(nextProps.unionBankId,cb);
            }
        } else {
            this.getCityString(provinceData)
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
        let province = InsuranceStore.getStakeholder().bankprovinceDatas[this.props.unionBankId][obj.index];

        let result = {
            name: province.name,
            no: province.id
        }

        this.props.onSelect(result);
        let cb = (msg) => {
            if (msg.result.toString() === '1') {
                
                    InsuranceActionCreators.updateCityDatas(result.no, msg.list);
                    InsuranceActionCreators.closeCity(1); 
                }else if (msg.result.toString() === '2'){
                    InsuranceActionCreators.closeCity(0); 
                    InsuranceActionCreators.initBankslist(msg.list); 
                    
                }
            }

        getBankCity(this.props.unionBankId,result.no,cb);

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