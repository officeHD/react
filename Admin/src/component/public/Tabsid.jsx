import { Tabs } from 'antd';
import React from 'react'; 
import TabPanes from './TabPanes'; 
 

export default class Tabsid extends React.Component {
 
  render(){
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <TabPanes tab={number}  key={number}/>
    );
    
    return(
      <Tabs type="card">
        {listItems}
      </Tabs>
    )
  }
}


