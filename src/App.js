import React, { Component } from 'react';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './component/FaceRecognition/FaceRecognition';
import Particle from './component/Particle/Particle';
import Clarifai from 'clarifai';
import './App.css';
Calculate_FaceLocation=(data)=>{
  const clarifaiFace=data.output[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById(inputimage);
  const width=Number(image.width);
  const height=number(image.height);
}
const app=new clarifai.App({
  apiKey:''
});
class app extends component{
  constructor(){
    super();
    this.state={
      input=' ',
      box:{ },
      route:'signin',
      isSignedIn:false

    }
  }
}
onInputChange=(event)=>{
  this.setState({input:event.target.value});
}
onButtonSubmit=()=>{
  this.setState({imageUrl;this.state.input});
  app.models.predict(
    clarifai.FACE_DETECT_MODEL,this.state.input)
  .then(response=>this.displayFacebox(this.calculate FaceLocation(response)))
  .catch(err=>console.log(err));
}
calculateFaceLocation=(data)=>{
  const clarifaiface=data.output[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById('inputimage');
  const width=Number(image.width);
  const height=Number(image.height);
  return{
    leftCol:clarifaiFace.left_col*width,
    topRow:clarifaiFace.top_row*height,
    rightCol:Width-(clarifaiFace.right_col*width),
    bottomRow:height-(clarifaiFace.bottom_row*height)
  }
}
display displayFacebox=(box)=>{
  console.log(box);
  this.setState({box:box});
}
onRouteChange=(route)=>{
  if(route==='signout'){
    this.setState({isSignedIn:false})}
  else if(route==='home'){
      this.setstate({isSignedIn:true})
      this.setState({route:route});
  }
class App extends Component {
  const particleOptions={particles:{number:{
    value:30,density:{enable:true,value_area:800}
  }}}
  render() {
    return (
      <div className="App">
      <Particle className='particles' paparms={particleOptions}/>
      <Navigation />
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>

    );
  }
}

export default App;
