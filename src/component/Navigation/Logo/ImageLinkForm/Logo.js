import React from 'react';
import Brain from './brain.png';
import tilt from 'react-tilt';
import Brain from './navigation.css';
const Logo =()=>
{
	return(
	<div className='ma4 mt0'>
	<Tilt className='tilt br2 shadow-2' option={{max:55}} style={{height:150 weight:150}}>
	<div className="tilt-inner Pa3">
	<img style={{padding top:'5px'}} alt='logo' src={brain}/>
	</div>
	</tilt>
	</div>
	);
}
export default logo;