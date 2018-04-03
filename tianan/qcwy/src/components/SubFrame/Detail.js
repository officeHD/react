import React,{Component} from 'react'
import style from '../asset/css/Tab.less'
import { Icon } from 'antd-mobile';
import { Link } from 'react-router';
import AppStore from '../../stores/AppStore';
export default class Out extends Component {
      constructor(props){
        super(props);  
        this.state = {
            type: AppStore.getType(),
        };
        this.Notice2 = this.Notice2.bind(this);
        this.Notice1 = this.Notice1.bind(this);
        this.Notice3 = this.Notice3.bind(this);
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() { 
        AppStore.addChangeListener(this._onChange); 
       
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
        
    };
    _onChange() {  
        this.setState({type: AppStore.getType(),});  
    };
    Notice1(){
        if(this.state.type){
            window.open('',"_blank").location=`${ctx}/static/pdf/anbang/changxwy/doubleInsure.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/changxwy/doubleInsure.pdf`)
            }else{
                tianbai.openPdfController(`/static/pdf/anbang/changxwy/doubleInsure.pdf`)  
            }
        }
       
    }
    Notice2(){
        if(this.state.type){
            window.open('',"_blank").location=`${ctx}/static/pdf/anbang/changxwy/sheet.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/changxwy/sheet.pdf`)
            } else{
                 tianbai.openPdfController(`/static/pdf/anbang/changxwy/sheet.pdf`)
                
            }
        }
       
    }
    Notice3(){
        if(this.state.type){
             window.open('',"_blank").location=`${ctx}/static/pdf/anbang/changxwy/Insurance.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/changxwy/Insurance.pdf`)
            }else{
                 tianbai.openPdfController(`/static/pdf/anbang/changxwy/Insurance.pdf`)
            }
        }
       
    }
     render(){
        return (
            <ul className={style.notice_li}>
                    <li onClick={this.Notice1}>
                        <img src={require(`../asset/img/book_y.png`)}/> 
                         《安邦畅行无忧两全保险 条款》
                    </li>
                    <li onClick={this.Notice2}>
                        <img src={require(`../asset/img/book_g.png`)}/> 
                        《安邦畅行无忧两全保险费率表》
                    </li>
                    <li onClick={this.Notice3}>
                        <img src={require(`../asset/img/book_r.png`)}/> 
                        《安邦畅行无忧两全保险 现金价值表（示例）》
                    </li>
            </ul>
        )
    }
}

 


