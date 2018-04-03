import React, {Component} from 'react';
import TitleBar from './TitleBar';
import CompanyList from './CompanyList';
import InsuranceStore from '../../stores/InsuranceStore';
import {getUrlWorkNum } from '../APIUtils'
export default class Out extends Component {
    render() {
        return (
          <div>
              <TitleBar title="泰康" />
              <CompanyList />
          </div>
        );
    };
}