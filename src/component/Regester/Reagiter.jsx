import React from 'react';

class Register extends React.Component  {
  constructor(props){
    super(props);
      this.state = {
        name : '',
        email : '',
        password : ''

      }
 
    }
    onNameChange= (event)=>{
      this.setState({name : event.target.value})
  }
  onEmailChange= (event)=>{
    this.setState({email : event.target.value})
}
onPassChange= (event)=>{
  this.setState({password : event.target.value})
}
 
onSubmit =()=> {
  fetch('http://localhost:3000/register',{
    method: 'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      email: this.state.email,
      password : this.state.password,
      name : this.state.name
    })

  })
  .then(response => response.json())
  .then(user=>{
    if (user){
      this.props.loudUser(user)
      this.props.onRouteChange('signin');
    }
  })
  
}

  
  render (){
    
      return (
        
        <div className=''>
            <article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 mw6 center">
         <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="name"
          name="name" 
          onChange={this.onNameChange}
         id="name"></input>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        onChange={this.onEmailChange}
        id="email-address"></input>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password" 
        onChange={this.onPassChnge}
         id="password"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input
      onClick = {this.onSubmit}
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit"
       value="Regestir"
       />
    </div>
    <div className="lh-copy mt3">
      
  
    </div>
  </div>
</main>
</article>
        </div>
      );
}
  }
  
export default Register;