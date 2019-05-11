import StaffStore from './StaffStore';
import OrderStore from './OrderStore';
import InsuredStore from './InsuredStore';
import InsuranceStore from './InsuranceStore';
import BnfsStore from './bnfsStore';


import { insureData} from './data';
import {getDataFromUrl,GetDateStr} from '../api/util';
import {getEditDate,getprem} from '../api/index';
import { Toast } from 'antd-mobile';
/**
 * 根store
 * @class RootStore
 * staffStore 为员工信息
 * CustomerStore 为客户信息
 * OrderStore订单信息及支付信息
 */
class RootStore {
  constructor() {
    this.staff = new StaffStore(this);
    this.order = new OrderStore(this);
    this.insurant = new InsuredStore(this);
    this.holder = new InsuredStore(this); 
    this.insurance = new InsuranceStore(this); 
    this.benefit = new BnfsStore(this); 
    

    let origin=getDataFromUrl("type"); //访问的环境 
    let workNum=getDataFromUrl("workNum"); 
    let id=getDataFromUrl("id"); 
    let varietyCode=getDataFromUrl("varietyCode"); 
    if(varietyCode){
      let currentData = insureData.find(item => item.varietyCode == varietyCode);
      this.insurance.initData(currentData);
      this.insurance.initData({planCode:currentData.planData[0].value});
      
      let insureAge=currentData.planData[0].insureAge;
      let holderAge=currentData.holderAge; 
      let ageArr = insureAge.split("-");
      let ageStar = GetDateStr("year", -(parseInt(ageArr[0])));
      if (ageArr[0].indexOf("天") > 0) {
        ageStar = GetDateStr("day", -(parseInt(ageArr[0])));
      }
      let ageEnd = GetDateStr("year", -(parseInt(ageArr[1])+1));
      ageEnd=GetDateStr("day",1,ageEnd)
      let tbageArr = holderAge.split("-");
      let tbageStar = GetDateStr("year", -(parseInt(tbageArr[0])));
      if (tbageArr[0].indexOf("天") > 0) {
        tbageStar = GetDateStr("day", -(parseInt(tbageArr[0])));
      }
      let tbageEnd = GetDateStr("year", -(parseInt(tbageArr[1])+1));
      tbageEnd=GetDateStr("day",1,tbageEnd)
      this.insurance.initData({ageStar:ageStar,ageEnd:ageEnd});
      //初始化出生日期
      this.insurant.setUserData({birthDate:ageStar})
      this.insurance.initData({tbageStar:ageStar,tbageEnd:ageEnd});
      //初始化出生日期
      this.holder.setUserData({birthDate:ageStar})
      
      this.insurance.getPrem();
       
    } 
    if(origin){
      this.staff.setOrigin(origin)   
    }
    if(workNum){
      this.staff.setWorkNum(workNum)   
    }
    if(id){
      getEditDate(id,res=>{
        // this.order.getDetail(id);  
        console.log(res); 
      })
    }
  }
}

// 返回RootStore实例
export default new RootStore();