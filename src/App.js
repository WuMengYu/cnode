import React from 'react';
import Home from './Home.js';
import Topic from './Topic.js';
import Header from './Header.js';
// import User from './User.js';
import { BrowserRouter,Route } from 'react-router-dom';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
        admin:true
    }
  }

  render(){
    return(
      <BrowserRouter>
        <Route render={ props =>(
          <div>
            <Header/>

              <div className={props.location.key} key={props.location.key}>
                <Route exact path='/' component={Home} />
                <Route exact path='/topic/:id' component={Topic} />
              </div>

              <h1>我是底部footer</h1>
          </div>
        )} />

      </BrowserRouter>
    )
  }
}
// <Route exact path='/user/:loginname' component={User} />
export default App
