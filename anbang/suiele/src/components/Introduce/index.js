import React , {Component} from 'react'
import TitleBar from '../public/TitleBar';
import Banner from '../public/Banner';
import Item from './Items';
import Footer from './Footer';
import FormBox from './FormBox';
import { componies } from '../asset/json/appInfo.json';

export default class Instruction extends Component {
    constructor(props){
      super(props);
      this.state = this.getData();
    };
    getData() {
      return {
        company:  componies[0],
      }
    };
    render() {
      let company=this.state.company;
        return (
           <div>
           
            <TitleBar title="安邦随e乐两全保险"/>
            <Banner company={company}/>
            <Item company={company}/>
            <Footer/>
            <FormBox/>
             
          </div>
        );
    };
}