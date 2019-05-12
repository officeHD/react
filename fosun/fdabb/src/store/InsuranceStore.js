import {
  observable,
  action,
  computed
} from 'mobx';
import { Toast } from 'antd-mobile';
import {
  getEditDate,
  getprem,
  insert_order
  
} from '../api/index';
// 员工信息store
export default class InsuranceStore {
  @observable planCode = ""; //方案代码
  @observable planData = []; //方案代码
  @observable insuYear = ""; //保障期限
  @observable baseMoney = ""; //保障期限
  @observable insuYearArry = ""; //保障期限
  @observable payment = ""; //交费年期
  @observable paymentArry = ""; //交费年期
  @observable socialSecFlag = ""; //有无社保
  @observable amnt = "1"; //保额
  @observable prem = ""; //保费
  @observable ageStar = ""; //被保人最小出生日期
  @observable ageEnd = ""; //被保人最大出生日期
  @observable tbageStar = ""; //投保人最小出生日期
  @observable tbageEnd = ""; //投保人最大出生日期
  @observable prem = ""; //保费
  @observable totalPrem = ""; //总保费
  @observable productList = []; //保险计划




  constructor(rootStore) {
    this.rootStore = rootStore
  }
  /**
   * 初始化值
   * @param {*} obj 
   */
  @action
  initData(obj) {
    Object.assign(this, obj);
  }


  /**
   * 获取保费
   */
  @action
  getPrem() {
    Toast.loading("", 0, null, true)
    let that = this;
    getprem(this.rootStore, res => {
      Toast.hide();
      if (res.result.toString() === "1") {
        that.prem = res.prem;
        that.totalPrem = res.totalPrem;
        that.productList = res.productList;
        // console.log(this);  
      } else {
        Toast.info(res.message, 1)
      }
    })
  }
  /**
   * 试算下一步
   */
  @action
  computer() {
    let that = this;
    Toast.loading("", 0, null, true)
    getprem(this.rootStore, res => {
      Toast.hide();
      if (res.result.toString() === "1") {
        that.prem = res.prem;
        that.totalPrem = res.totalPrem;
        that.productList = res.productList;
        window.location.href = "#/health"
      } else {
        Toast.info(res.message, 1)
      }
    })
  }
  /**
   * 投保
   */
  @action
  insertOrder() {
    insert_order("insertOrder",this.rootStore, res => {
      console.log(res);
      if (res.result.toString() === "1") {
        this.rootStore.order.setData({
          orderId: res.orderId,
          orderNo: res.orderNo
        })

        console.log(this.rootStore)
        window.location.href = "#/insuredDetail"
      } 
    })
  }
  /**
   * 核保
   */
  @action
  underwriting() {
    insert_order("underwriting",this.rootStore, res => {
      console.log(res);
      if (res.result.toString() === "1") {
        this.rootStore.order.setData({
          orderId: res.orderId,
          orderNo: res.orderNo
        })

        console.log(this.rootStore)
        window.location.href = "#/insuredDetail"
      } 
    })
  }






}