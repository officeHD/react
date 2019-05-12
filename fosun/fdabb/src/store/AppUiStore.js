import { observable, action, computed } from 'mobx';
import { checkBenfit } from '../api/util';

// 受益人store
export default class bnfsStore {
  rootStore;

  @observable showOccuPation =false;
   
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  changeShow(val) {
    this.showOccuPation = val;
  }
  //设置值
  @action
  addBenefit() {
    if (checkBenfit(this.rootStore)) {
      this.lists[this.lists.length] = {
        name: "",
        idNum: "",
        phone: "",
        rate: "",
        validDateEnd: "",
        relation: ""
      };
    }
  }
  @action
  delBeneFfit(index) {
    this.lists.splice(index, 1);
  }
  //设置值
  @action
  setData(obj) {
    this.lists[obj.index][obj.dataType] = obj.value;
    this.lists = this.lists.slice(0);
  }

  

}