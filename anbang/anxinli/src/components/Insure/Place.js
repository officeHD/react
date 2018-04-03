import React, {Component} from 'react';
import SelectorProvince from '../public/SelectorProvince'
import SelectorCity from '../public/SelectorCity'
import SelectorCounty from '../public/SelectorCounty'
 
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
        this.showTbCountrySelector = this.showTbCountrySelector.bind(this);
        this.selectTbProvince = this.selectTbProvince.bind(this);
        this.selectTbCity = this.selectTbCity.bind(this);
        this.selectTbCounty = this.selectTbCounty.bind(this);
        this.onClose = this.onClose.bind(this)
    };
    
    //展示省选择器
    showTbProvinceSelector() {
        this.setState({
            isShowProvinces: true,
            isShowCities: false,
            isShowCounty: false,
        });
    }

    //显示城市选择器
    showTbCitySelector() {
        if (this.props.province.no) {
            this.setState({
                isShowProvinces:false,
                isShowCities: true,
                isShowCounty: false,
            });
        } else {
            Toast.info('请先选择省份!', 2);
        }
    }
     //显示城市选择器
    showTbCountrySelector() {
        if (this.props.city.no) {
            this.setState({
                isShowProvinces:false,
                isShowCities: false,
                isShowCounty: true,
            });
        } else {
            Toast.info('请先选择市!', 2);
        }
    }
    //选择省操作
    selectTbProvince(province) {
        if(this.props.type==="bbr"){
            if (province.name !== this.props.province.name) {
                InsuranceActionCreators.changeBCity({name:'', no: ''});
            }

            InsuranceActionCreators.changeBProvince(province);
        }else{
             if (province.name !== this.props.province.name) {
                InsuranceActionCreators.changeCity({name:'', no: ''});
            }

            InsuranceActionCreators.changeProvince(province);
        }

       
    }

    //关闭选择器
    onClose() {
        this.setState({
            isShowProvinces: false,
            isShowCities: false,
            isShowCounty: false,
        })
    }
    //选择市
    selectTbCity(city) {
        if(this.props.type==="bbr"){
            InsuranceActionCreators.changeBCity(city);
        }else{
            InsuranceActionCreators.changeCity(city);
        }
        
    }
    selectTbCounty(county){
         if(this.props.type==="bbr"){
            InsuranceActionCreators.changeBCounty(county);
         }else{
            InsuranceActionCreators.changeCounty(county);
         }
        
    }

    render() {

        return (
            <div className={style.place}>
                <span className={style.selections}>
                    <input className={style.select_toubao} placeholder="请选择省" readOnly="readOnly" value={this.props.province.name}   onClick={this.showTbProvinceSelector} />
                    <input className={style.select_toubao} placeholder="请选择市" readOnly="readonly" value={this.props.city.name} onClick={this.showTbCitySelector}/>
                    <input className={style.select_toubao} placeholder="请选择县" readOnly="readonly" value={this.props.country.name} onClick={this.showTbCountrySelector}/>
                    
                </span>
                <SelectorProvince
                    isShow={this.state.isShowProvinces} 
                    selected={this.props.province.name}
                    onClose={this.onClose} 
                    onSelect={this.selectTbProvince}/>
                <SelectorCity
                    isShow={this.state.isShowCities} 
                     pro={this.props.province.no} 
                     selected={this.props.city.name} 
                    onClose={this.onClose} 
                    onSelect={this.selectTbCity}/>
                <SelectorCounty
                    isShow={this.state.isShowCounty} 
                    city={this.props.city.no} 
                    selected={this.props.country.name} 
                    onClose={this.onClose} 
                    onSelect={this.selectTbCounty} 
                />
            </div>
        );
    };
}
