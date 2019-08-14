import React from 'react';
import CreateUser from './Components/CreateUser';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={<CreateUser/>}/>
      </Switch>
      {/* <div className="container">
        <CreateUser />        
      </div> */}
      
    </div>
  );
}

export default App;
