import React , {Component} from 'react'
import TitleBar from '../public/TitleBar';
import Banner from '../public/Banner';
import Item from './Items';
import Footer from './Footer';
import FormBox from './FormBox';
import { componies } from '../asset/json/appInfo.json';
import style from '../asset/css/introduce.less';

import InsuranceStore from '../../stores/InsuranceStore';

export default class Instruction extends Component {
    constructor(props){
      super(props);
      this.state = this.getData();
      this._onChange=this._onChange.bind(this); 
    };
    getData() {
      return {
        company:  componies[0],
        stakeholder: InsuranceStore.getStakeholder()
      }
    };
    _onChange() {  
        this.setState({ 
            stakeholder: InsuranceStore.getStakeholder() 
        });  
    };
     componentDidMount() { 
        
        InsuranceStore.addChangeListener(this._onChange); 
    };
    componentWillUnmount () {  
         
        InsuranceStore.removeChangeListener(this._onChange);  
    };
   
    
    render() {
      let company=this.state.company;
        return (
           <div>
            <TitleBar title={company.product}/>
            <Banner company={company}/>
            <Item company={company} stakeholder={this.state.stakeholder}/>
            
            <FormBox stakeholder={this.state.stakeholder}/>
          </div>
        );
    };
}