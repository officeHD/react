import React, {Component} from 'react'
import style from '../asset/css/index.less'
import List from './List'
import Company from './Company'
import AppStore from '../../stores/AppStore';
import AppActionCreators from '../../actions/AppActionCreators';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { getDataFromUrl,getOrderDetail,getCompanyList } from '../APIUtils';
 
 

export default class Out extends Component {
    constructor(props){
        super(props);
        this.state = {
          tab: '1',
          list:AppStore.getUserInfo().list,
          page: Math.ceil(AppStore.getUserInfo().total/10),
          current:AppStore.getcurrentPage(),
          company: AppStore.getCompanyList(),
          
          companyShow:false
        }
        this.onSelect = this.onSelect.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.selectWait = this.selectWait.bind(this)
        this.selectFinsh = this.selectFinsh.bind(this)
        this.selectCompany = this.selectCompany.bind(this)
         this.onAppStoreChange = this.onAppStoreChange.bind(this);
    }
    onAppStoreChange() {
        this.setState({
            list: AppStore.getUserInfo().list,       //相关方数据集合
            page: Math.ceil(AppStore.getUserInfo().total/10),
            current:AppStore.getcurrentPage(),
            company: AppStore.getCompanyList()

        });
    }
     componentDidMount() {
       
        AppStore.addChangeListener(this.onAppStoreChange);
    };

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onAppStoreChange); 
    };
    selectAll() {
      this.setState({
        tab:'1', companyShow: false
      });
      getDataFromUrl('1','','');
    }

    selectWait() {
      this.setState({
        tab: '2', companyShow: false
      })
      getDataFromUrl("1",1,'');
       AppActionCreators.setcurrentPage(0)
    }
    selectFinsh(){
      this.setState({
        tab: '3', companyShow: false
      })
       getDataFromUrl("1",7,'');
        AppActionCreators.setcurrentPage(0)
    }
    selectCompany(){
      this.setState({
        tab: '4',
        companyShow:true
      })
     getCompanyList();
       AppActionCreators.setcurrentPage(0)

    }
    onSelect(){
      this.setState({
        companyShow: false
      })
    }
    Todetail(text){
          AppActionCreators.saveOrderMes(text)
        InsuranceActionCreators.saveOrderMes(text)
        getOrderDetail(text.serialNum,"detail");
       
       
    }
    payorder(text){
       AppActionCreators.saveOrderMes(text)
      InsuranceActionCreators.saveOrderMes(text)
      getOrderDetail(text.id);
     
      
    }
    render(){
 
        return (
          <div>
            <ul className={style.tab_controller}>
              <li className={this.state.tab ==='1'?  style.selected:'' } onClick={this.selectAll}>全部</li>
              <li className={this.state.tab ==='2'? style.selected : ''} onClick={this.selectWait}>待付款</li>
              <li className={this.state.tab ==='3'? style.selected : ''} onClick={this.selectFinsh}>已完成</li>
              <li className={this.state.tab ==='4'? style.selected : ''} onClick={this.selectCompany}>按公司</li>
            </ul> 
            {
              this.state.tab ==='4'&& this.state.companyShow? 
              <Company 
                lists={this.state.list} 
                company={this.state.company}
                onSelect={this.onSelect}
              />:""
               } 
               {this.state.companyShow?'':<List 
                lists={this.state.list} 
                Todetail={this.Todetail}
                payorder={this.payorder}
                page={this.state.page}
                current={this.state.current}
              />  }
              
           

          </div>
        )
    }
}