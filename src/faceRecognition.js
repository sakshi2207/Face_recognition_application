import React from 'react';
const faceRecognition =(imageUrl,box)=>{
	return(
		<div className='center ma'>
		<div className='absolute mt2'>
		<img alt=' ' src={imageUrl} width='500px' height='auto'/>
		<div className='bounding-box' style={{top:box.topRow,right:box.rightcol, bottom:box.bottomRow, left:box.leftcol}}</div>
		</div>
		</div>
		);

}
export default FaceRecognition