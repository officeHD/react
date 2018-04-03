import React , {Component} from 'react'
import TitleBar from '../public/TitleBar';
import Banner from '../public/Banner';
import Item from './Items';
import Footer from './Footer';
import FormBox from './FormBox';
import { componies } from '../asset/json/appInfo.json';
import style from '../asset/css/introduce.less';

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
            <TitleBar title="码上长大"/>
            <Banner company={company}/>
            <Item company={company}/>
            <Footer/>
            <FormBox/>
          </div>
        );
    };
}