import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// PAGES
import CreateUser from './Components/CreateUser/CreateUser';
import Mail from './Components/Mail/Mail';

import {connect} from 'react-redux';


import MessageListContainer from './Components/MessageListContainer/MessageListContainer';

class App extends React.Component {
  render() {    
    const hasNoUsers = this.props.userList.length === 0;
    return (
      <div className="App">
        <Switch>
            { 
              hasNoUsers ? 
                <Route path="/" render={(props)=><CreateUser {...props}/>}/> : 
                <Route exact path="/" render={()=> <Redirect to={{ pathname: "/inbox"}}/> }/>
            }
          
          <Route exact path="/" render={()=> <Redirect to={{ pathname: "/inbox"}}/> }/>          
          <Route path="/inbox" render={(props)=><Mail {...props} view={'inbox'}><MessageListContainer /></Mail>}/> 
          <Route path="/sent" render={(props)=><Mail {...props} view={'sent'}><MessageListContainer /></Mail>}/> 
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
