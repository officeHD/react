import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Banner from './Banner';
import Content from './Content';
import Reply from './Reply';
import Replys from './Replys';
import Card from './Card';
 
 
export default class Out extends Component {
 
  render() {
      return (
        <div>
          <TitleBar title="民盛车险" />
            <Banner/>
            <Content/>
            <Reply/>
            <Replys/>
            <Card/>
          
        </div>
      );
  };
}