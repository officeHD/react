import React, {Component} from 'react';
 
import { getDataFromUrl } from './APIUtils';
 import style from './asset/css/init.less'

export default class App extends Component {

    componentDidMount() {      
        getDataFromUrl();
    };

    render() {
        return (
            <div>
              
                {this.props.children}
            </div>
        );
    };
}