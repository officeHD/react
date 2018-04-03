import React from 'react'
import { Link } from 'react-router'
import LazyLoad from 'react-lazy-load';
const CarImg = ({height,car, onChoiceCar}) => (
    	
  <li onClick={e => onChoiceCar(car)}>
  	<LazyLoad  height={height}  offsetVertical={400}>
	    <Link to={'/detail'}>
	     
	     		<img src={`${ctx}/static/img/mscx/${car.id}.jpg`} />
	    	
	    </Link>
     </LazyLoad>
  </li>
 
)

export default CarImg
 