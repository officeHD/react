import { observable, computed, action } from 'mobx';
// 员工信息store
export default class OrderStore {
  rootStore;

  @observable  orderId="";
  @observable  orderNo="";

 
  // 删
  @action
  getDetail(id) {
     this.orderId=id;
  }

  @computed get isAllSelected() {
    const allTrue = this.foodList.every(v => v.isSelected === true);
    if (allTrue) {
      return true;
    }
    return false;
  }

  // 总价格
  @computed get totalMoney() {
    let money = 0;
    this.foodList.filter(e => e.isSelected === true).forEach(e => {
      money += e.price * e.count;
    });
    return money;
  }
}