import React, {Component} from 'react';
import Company from './Company';
import InsuranceStore from '../../stores/InsuranceStore';
import { componies } from '../asset/json/appInfo.json';
import style from '../asset/css/Companies.less'

export default class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = this.getData();
        this._onChange=this._onChange.bind(this); 
    }
    componentDidMount() { 
        InsuranceStore.addChangeListener(this._onChange);  
    }
    componentWillUnmount () {  
        InsuranceStore.removeChangeListener(this._onChange);  
    }
    getData() {
        return {
            tbPlace: InsuranceStore.getTbPlace()
        }
    }
    _onChange() {  
        this.setState(this.getData());  
    } 
    render() {
        let listShows = componies.map((company ,index) => {
            for(var i=0;i<=company.city.length-1;i++){
               if(company.city[i]==this.state.tbPlace.province.no){
                    return <Company key={index} company={company}/>
               }  
            }  
        });
        return (
            <div>
                <ul className={style.company_list}>
                    {listShows}
                </ul>
            </div>
        );
    };
}
