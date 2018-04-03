import React, {Component} from 'react';
import AlertProgress from './public/AlertProgress'
import { getDataFromUrl } from './APIUtils';
import './asset/css/init.less'

export default class App extends Component {

    componentDidMount() {      
        getDataFromUrl();
 
    };

    render() {
        return (
            <div>
                <AlertProgress />
                {this.props.children}
            </div>
        );
    };
}