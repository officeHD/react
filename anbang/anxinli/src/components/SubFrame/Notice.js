import React,{Component} from 'react';
import style from '../asset/css/Tab.less';
import AppActionCreators from '../../actions/AppActionCreators';
import AppStore from '../../stores/AppStore';
 


export default class Out extends Component {
    constructor(props){
        super(props);  
        this.state = {
            type: AppStore.getType(),
        };
        this.Notice2 = this.Notice2.bind(this);
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
    
      AppActionCreators.setTipsPage(1);
      window.location="#notice"
    }
     Notice2(){
      if(this.state.type){
         window.open('',"_blank").location=`${ctx}/static/pdf/anbang/PersonalInsuranceTips.pdf`
      }else{
        if(window.minsheng){
          window.minsheng.OpenPdfActivity(`/static/pdf/anbang/PersonalInsuranceTips.pdf`)
        }else{
          tianbai.openPdfController(`/static/pdf/anbang/PersonalInsuranceTips.pdf`)
        }
      } 
    }
     Notice3(){
      
      AppActionCreators.setTipsPage(3);
      window.location="#notice"
    }
    render(){
        return (
          <ul className={style.notice_li}>
            <li onClick={this.Notice1}>
              <img src={require(`../asset/img/notice1.png`)}/> 
              投保提示
            </li>
            <li onClick={this.Notice2}>
                <img src={require(`../asset/img/notice2.png`)}/> 
                人生投保提示书
              </li>         
            <li onClick={this.Notice3}>
                <img src={require(`../asset/img/notice3.png`)}/> 
                投保声明    
            </li>
          </ul>
        )
    }}