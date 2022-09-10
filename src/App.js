import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// function Feature(){
//   return (
//     <div className='feature'>
//       <img src='' className='feature-image'/>
//       <h3 className='features-title'>title</h3>
//       <p className='feature-desc'>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolores quis nihil. Recusandae blanditiis corporis praesentium inventore dolor magni neque alias doloremque. 
//         Error culpa quis doloremque libero similique sunt?
//       </p>
      
//     </div>
//   );
// }
//parrent component
class App extends Component{
  constructor(){
    super();
    this.state = {
      message: 'Hello world'
    }
  }
  render(){
    return (
     <div>
     {/* children component */}
       {/* <Feature></Feature>
       <Feature></Feature>
       <Feature></Feature> */}
       <YoutubeItem image="https://images.unsplash.com/photo-1662572163236-630fd5bcc99d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></YoutubeItem>
     </div>
    )
         
  }
}
// props :properties
function YoutubeItem(props){
  console.log(props);
  return(
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src="https://images.unsplash.com/photo-1657664049360-66ca933f7a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
         alt="" className='youtube-avatar' />
      </div>
      <div className="youtube-info">
        <h3 className="youtube-title">
          learning react
        </h3>
        <h4 className="youtube-author">
          hxt
        </h4>
      </div>
    </div>
  )
}

export default App;
