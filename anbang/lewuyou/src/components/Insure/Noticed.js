import React, {Component} from 'react';
import { Link } from 'react-router';
import AppActionCreators from '../../actions/AppActionCreators';
import style from '../asset/css/Insure.less'
import AppStore from '../../stores/AppStore';

export default class out extends Component {
    constructor(props){
        super(props);

        this.state = {
            showItems: false,
             type: AppStore.getType(),
        };
        
        this.Notice2 = this.Notice2.bind(this);
        this.leftPage = this.leftPage.bind(this);
        this.rightPage = this.rightPage.bind(this);
        this.centerPage = this.centerPage.bind(this);
        this.toggleShowItems = this.toggleShowItems.bind(this);
        this._onChange = this._onChange.bind(this);
    };
    componentDidMount() { 
        AppStore.addChangeListener(this._onChange); 
       
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
        
    };
    _onChange() {  
        this.setState({type: AppStore.getType(),});  
    };
    toggleShowItems() {
        this.setState({
            showItems: !this.state.showItems
        })
    }
    Notice1(){
    
      AppActionCreators.setTipsPage(1);
      
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
    leftPage(){
      if(this.state.type){
        window.open('',"_blank").location=`${ctx}/static/pdf/anbang/lewuyou/doubleInsure.pdf`
      }else{
         if(window.minsheng){
            window.minsheng.OpenPdfActivity(`/static/pdf/anbang/lewuyou/doubleInsure.pdf`)
        }else{
              tianbai.openPdfController(`/static/pdf/anbang/lewuyou/doubleInsure.pdf`) 
        }
      }
      
    }
    centerPage(){
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
    rightPage(){
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
    render() {

        return (
            <div className={style.notice}>
                <div className={style.notice_item}>
                    <span className={this.props.hasNoticed ? style.selected : style.agreed} onClick={this.props.toggleHasNoticed}> 
                         我已阅读并同意此保险的 <br/>
                    
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={style.notice_list}>
                        <Link to="/notice"  onClick={this.Notice1} className={style.a}>投保提示</Link>
                        <span  onClick={this.Notice2} className={style.a}>人生投保提示书</span>
                        <span  onClick={this.Notice3} className={style.a}>投保声明</span><br/>
                        <span  onClick={this.leftPage} className={style.a}>保险条款</span> 
                        <span  onClick={this.centerPage} className={style.a}>保险费率表</span> 
                        <span  onClick={this.rightPage} className={style.a}>重疾保险条款</span> 
                    </span>
                    
                    
                </div>
                 
            </div>
        );
    };
}

