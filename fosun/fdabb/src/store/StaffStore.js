import { observable, action } from 'mobx';
// 员工信息store
export default class StaffStore {
  rootStore;

  @observable workNum = "";
  @observable staffId = "";
  @observable photo = "";
  @observable phone = "";
  @observable name = "";
  @observable origin = "ms";

  //设置值
  @action
  setOrigin(val) {
    this.origin = val;
  }
  @action
  setWorkNum(val){
    this.workNum=val;
  }
  //设置值
  @action
  setData(obj) {
    this.name = obj.name;
    this.staffId = obj.staffId;
    this.workNum = obj.workNum;
    this.phone = obj.phone;
  }
}