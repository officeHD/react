import React, {Component} from 'react';
import SelectBankProvince from '../public/SelectBankProvince'
import SelectBankCity from '../public/SelectBankCity'
 
 
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { Toast } from 'antd-mobile';
import style from '../asset/css/Insure.less'

export default class IndexDesk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowProvinces: false,
            isShowCities: false, 
        };
        this.showTbProvinceSelector = this.showTbProvinceSelector.bind(this);
        this.showTbCitySelector = this.showTbCitySelector.bind(this);
        
        this.selectTbProvince = this.selectTbProvince.bind(this);
        this.onClose = this.onClose.bind(this)
    };
    
    //展示省选择器
    showTbProvinceSelector() {
        //目前只支持安徽省
        // Toast.info('目前只支持安徽省!', 2);
         if(this.props.unionBankId){
        this.setState({
            isShowProvinces: true,
            isShowCities: false,
            
        })}else{
            Toast.info('请先选择开户行!', 1); 
        }
    }

    //显示城市选择器
    showTbCitySelector() {

       
            if (this.props.province.no) {
                this.setState({
                    isShowProvinces:false,
                    isShowCities: true, 
                });
            } else {
                Toast.info('请先选择省份!', 1);
            } 
       
        
    }
    
    //选择省操作
    selectTbProvince(province) {
         
        if (province.name !== this.props.province.name) {
            InsuranceActionCreators.changeCardCity({name:'', no: ''});
        }

        InsuranceActionCreators.changeCardProvince(province);
    }

    //关闭选择器
    onClose() {
        this.setState({
            isShowProvinces: false,
            isShowCities: false,
            
        })
    }
    //选择市
    selectTbCity(city) {
        InsuranceActionCreators.changeCardCity(city);
    }
    
    render() {
        return (
            <div className={style.place}>
                <span className={style.selections}>
                    <input className={style.select_card} placeholder="请选择省" readOnly="readOnly" value={this.props.province.name}   onClick={this.showTbProvinceSelector} />
                    {this.props.closeCity?<input className={style.select_card} placeholder="请选择市" readOnly="readonly" value={this.props.city.name} onClick={this.showTbCitySelector}/>:''}
                    
                </span>
                <SelectBankProvince
                    isShow={this.state.isShowProvinces}
                    unionBankId={this.props.unionBankId} 
                    selected={this.props.province.name}
                    onClose={this.onClose} 
                    onSelect={this.selectTbProvince}/>
                <SelectBankCity
                    isShow={this.state.isShowCities} 
                    pro={this.props.province.no}
                    unionBankId={this.props.unionBankId}
                    selected={this.props.city.name} 
                    onClose={this.onClose} 
                    onSelect={this.selectTbCity}/>
                 
            </div>
        );
    };
}
