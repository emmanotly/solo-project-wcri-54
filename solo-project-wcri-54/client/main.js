// import React and REact-DOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// impoert useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const routeChange = () => { 
  let path = `newPath`; 
  navigate(path);
}


// import file

// create the App class, and make sure to put an 'app' id in the html file
class App extends Component {
  // add a constructor for state
  // the state should have a button status
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div style ={styles.container}>
        
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

ReactDOM.render(<App />, document.getElementById('app'));