import React from 'react';
import {Route, Switch} from 'react-router-dom';

// PAGES
import CreateUser from './Components/Pages/CreateUser';
import Mail from './Components/Pages/Mail/Mail';

import {connect} from 'react-redux';


class App extends React.Component {
  render() {    
    const hasNoUsers = this.props.userList.length === 0;
    return (
      <div className="App">
        <Switch>
            { 
              hasNoUsers ? 
                <Route path="/" render={(props)=><CreateUser {...props}/>}/> : 
               <Route exact path="/" render={(props)=><Mail {...props}/>}/>          
            }
          <Route path="/create-user" render={(props)=><CreateUser {...props}/>}/>
          
          
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const connectorComponent = connect(mapStateToProps)

export default connectorComponent(App);
