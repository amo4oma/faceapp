import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navition from './component/navigation';
import Logo from './component/Logo';
import  ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import  Facerecognitio from './component/Facerecognitio/Facerecognitio';
import 'tachyons';
import Rank from './component/Rank/Rank';
import Particles from 'react-particles-js';
import Siginin from './component/signin/singnin';
import Register from './component/Regester/Reagiter';

const app = new Clarifai.App ({
  apiKey: '7549024b4d5a494181250702b027089b'
});
const ParticlesOption ={
 
             particles:{
              number: {
                value: 30,
                density:{

              enable:true,
              value_area: 200
                }
              }
             }
}
class App extends Component{
  constructor(){
    super();
    this.state ={
      input : '',
      imageUrl:'',
      box: {},
      route : 'signin',
      isSignedIn: false,
      user: {
      id : '',
			name: '',
			email: '',
			password: '',
			entries:'',
      joined : ''
      }
    }
   
  }

  loudUser =(data)=>
      this.setState({user:{
    	id : data.user,
			name: data.name,
			email: data.email,
			entries:data.entries,
			joined : data.joined

}})

  onRouteChange =(route)=>{
    
    if (route==='signout') {
    this.setState({isSignedIn:false})}
    else if (route==='home') {
      this.setState({isSignedIn:true})
    }
    this.setState ({route: route})
  }
  onInputCahnge = (event) => {
   this.setState({input: event.target.value})

  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
   }

   displayFaceBox =(box)=>{
  
     this.setState({box});

   }
   onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }
  render(){
      return (
    <div className="App">
      <Particles className='Particles'
      params={ParticlesOption}
      />
      
      <Navition isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
     { this.state.route === 'home' ?  
     <div> 
       <Logo/>
     <Rank/>
      <ImageLinkForm onInputCahnge= {this.onInputCahnge} onSubmit={this.onSubmit}/>
      <Facerecognitio box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
      : (
        this.state.route === 'signin' 
        ? <Siginin onRouteChange ={this.onRouteChange} />
      : <Register loudUser={this.loudUser} onRouteChange={this.onRouteChange}/>
      )
   
     
      
      

     }
     
    </div>
  );}}
  


export default App;
