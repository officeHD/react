import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import IFrame from './IFrame';
import style from '../asset/css/TitleBar.less'

export default class SubFrame extends Component {
     constructor(props){
        super(props);
        this.state = {
             maskshow: false,
             lists:[{name:"寿险订单",url:"/mobile/myorder"},{name:"车险订单",url:'/carInfMobile/ordeList'},{name:"卡单订单",url:'/appZhongan/app_order_list'}],
             url:'/mobile/myorder',
             idNum:this.getUrlParam("idNum"),
             checked:0,
             title:"寿险订单"
        }
        this.handelShow = this.handelShow.bind(this);
        this.hideMask = this.hideMask.bind(this);  
        this.checkOrder = this.checkOrder.bind(this);  
        this.toggleShow = this.toggleShow.bind(this);  
    }
    getUrlParam (name) {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        const r = window.location.search.substr(1).match(reg);
        if (r !== null) return unescape(r[2]);
        return null;
    };
    toggleShow(){
         this.setState({
            maskshow: !this.state.maskshow,
        })
    };
    handelShow(){
        this.setState({
            maskshow: true,
        })
    };
    hideMask(){
          this.setState({
            maskshow: false,
        })
    };
    checkOrder(text,index){
         this.setState({
            maskshow: false,
            url:text.url,
            checked:index,
            title:text.name
        })
        console.log(index);
    };
  
    render() {
        let listShows = this.state.lists.map((text, index)=> {
            return(<li key={index} onClick={e => this.checkOrder(text,index)} className={this.state.checked===index?style.red:''}>{text.name} {this.state.checked===index?<img src={require('../asset/img/icon_checked.png')}/>:''}</li>)
        })
        return (
            <div>
                <TitleBar title={this.state.title} handelShow={this.toggleShow} />
                {this.state.maskshow?<div className={style.mask} onClick={this.hideMask}>
                     <ul className={style.select}>
                        {listShows} 
                    </ul>
                </div>:''}
                
                <IFrame url={this.state.url} idNum={this.state.idNum}/>
            </div>
        )
    };
}