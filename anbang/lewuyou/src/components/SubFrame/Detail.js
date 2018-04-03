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
            window.open('',"_blank").location=`${ctx}/static/pdf/anbang/lewuyou/doubleInsure.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/lewuyou/doubleInsure.pdf`)
            }else{
                tianbai.openPdfController(`//static/pdf/anbang/lewuyou/doubleInsure.pdf`)  
            }
        }
       
    }
    Notice2(){
        if(this.state.type){
            window.open('',"_blank").location=`${ctx}/static/pdf/anbang/lewuyou/sheet.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/lewuyou/sheet.pdf`)
            } else{
                 tianbai.openPdfController(`/static/pdf/anbang/lewuyou/sheet.pdf`)
                
            }
        }
       
    }
    Notice3(){
        if(this.state.type){
             window.open('',"_blank").location=`${ctx}/static/pdf/anbang/lewuyou/Insurance.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/lewuyou/Insurance.pdf`)
            }else{
                 tianbai.openPdfController(`/static/pdf/anbang/lewuyou/Insurance.pdf`)
            }
        }
       
    }
     render(){
        return (
            <ul className={style.notice_li}>
                    <li onClick={this.Notice1}>
                        <img src={require(`../asset/img/book_y.png`)}/> 
                        《安邦乐无忧1号少儿两全保险条款》
                    </li>
                    <li onClick={this.Notice2}>
                        <img src={require(`../asset/img/book_g.png`)}/> 
                        《安邦乐无忧1号少儿重大疾病保险费率表》
                    </li>
                    <li onClick={this.Notice3}>
                        <img src={require(`../asset/img/book_r.png`)}/> 
                        《安邦乐无忧1号重大疾病保险条款》  
                    </li>
            </ul>
        )
    }
}

 
 