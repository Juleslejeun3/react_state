import { Component } from 'react';
import './App.css';
import Profile from './Proflle';

class App extends Component {
  state = {show : false, timer : 0 }

  componentDidMount(){      
    this.interval = setInterval(()=> this.timerInt()+1 ,1000)
}
  componentWillMount() {
    clearInterval(this.interval)
  }
  
  timerInt () {
    this.setState({timer : +1 })
  }
  
  
  handleShow=()=>this.setState({show:true})
  handleCached=()=>this.setState({show:false})
  render(){
    let show = this.state.show;
    let Button;
    if (show) {
      Button = <button onClick={this.handleCached}>Cacher profil</button>;
    } else {
      Button = <button onClick={this.handleShow}> Afficher Profil</button>;
    }
   
  return (
    <div className="App">
      {show?<Profile/> : null}
      {Button}
      <h2>Interval de temps : {this.state.timer}</h2>
    </div>
  );
}
}


export default App;
