import React,{Component} from 'react'
import style from '../asset/css/Tab.less'
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
            window.open('',"_blank").location=`${ctx}/static/pdf/anbang/anxl/product.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/anxl/product.pdf`)
            }else{
                tianbai.openPdfController(`/static/pdf/anbang/anxl/product.pdf`)  
            }
        }
       
    }
    Notice2(){
        if(this.state.type){
            window.open('',"_blank").location=`${ctx}/static/pdf/anbang/anxl/listrule.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/anxl/listrule.pdf`)
            } else{
                 tianbai.openPdfController(`/static/pdf/anbang/anxl/listrule.pdf`)
                
            }
        }
       
    }
    Notice3(){
        if(this.state.type){
             window.open('',"_blank").location=`${ctx}/static/pdf/anbang/anxl/pricelist.pdf`
        }else{
            if(window.minsheng){
                window.minsheng.OpenPdfActivity(`/static/pdf/anbang/anxl/pricelist.pdf`)
            }else{
                 tianbai.openPdfController(`/static/pdf/anbang/anxl/pricelist.pdf`)
            }
        }
       
    }
     render(){
        return (
            <ul className={style.notice_li}>
                    <li onClick={this.Notice1}>
                        <img src={require(`../asset/img/book_y.png`)}/> 
                        《安邦安鑫利两全保险（万能型）A款 产品说明书》
                    </li>
                    <li onClick={this.Notice2}>
                     	<img src={require(`../asset/img/book_g.png`)}/> 
                        《安邦安鑫利两全保险（万能型）A款 风险保费表》
                    </li>
                    <li onClick={this.Notice3}>
                     	<img src={require(`../asset/img/book_r.png`)}/> 
                        《安邦安鑫利两全保险（万能型）A款 条款》   
                    </li>
            </ul>
        )
    }
}

 