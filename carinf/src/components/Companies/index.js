import React, {Component} from 'react';
import TitleBar from './TitleBar';
import CompanyList from './CompanyList';
import {getUrlWorkNum } from '../APIUtils'
export default class Out extends Component {
	 componentWillMount(){
        getUrlWorkNum();
    };
	
    render() {
        return (
          <div>
              <TitleBar title="民盛车险" />
              
              <CompanyList />
          </div>
        );
    };
}