import React, {Component} from 'react';
import Company from './Company';
 
import CarStore from '../../stores/CarStore';
import { componies } from '../asset/json/appInfo.json';
import style from '../asset/css/Companies.less'
import QueueAnim from 'rc-queue-anim';
export default class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = this.getData();
        this._onChange=this._onChange.bind(this); 
    }
   componentDidMount() { 
        
        CarStore.addChangeListener(this._onChange);  
    }
    componentWillUnmount () {  
        CarStore.removeChangeListener(this._onChange);  
    }

    getData() {
        return {
            tbPlace: CarStore.getTbPlace()
        }
    }
     _onChange() {  
        this.setState(this.getData());  
    } 
    render() {

        let listShows = componies.map((company ,index) => {
            //暂不考虑 人保车险、太平洋
            // <Place province={this.state.tbPlace.province} city={this.state.tbPlace.city}/>
            for(var i=0;i<=company.city.length-1;i++){
               if(company.city[i]==this.state.tbPlace.province.no){
                    return <Company key={index} company={company}/>
               }  
            }  
        });

        return (
            <div>
                 
                <ul   className={style.company_list}>
                   <QueueAnim type={["left","scale"]} delay={[300]} duration={600}>
                        {listShows}
                   </QueueAnim>
                </ul>
                 
            </div>
            
        );
    };
}
