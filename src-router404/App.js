import React from 'react';
import { BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import './Main.css'

let New = () => <h1>我是新的页面，是old的改版</h1>;
let NotFound = () => <h1>我是404页面<Link to='/'>返回首页</Link></h1>;
// const Work = (props)=>{
//   console.log(props);
//   return(
//     <div>
//     我是work{props.match.params.work}
//     </div>
//
//   )
//
// }

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        admin:true
    }
  }
  render(){
    return(
      <Router>
        <div>
          <h1>Amazing</h1>
          <NavLink to='/' exact activeClassName='selected'>首页</NavLink><br/>
          <NavLink to='/about' activeClassName='selected'>about页面</NavLink><br/>
          <NavLink to='/work/uhkjh' activeClassName='selected'>work页面</NavLink><br/>
          <NavLink to='/new' activeClassName='selected'>new页面</NavLink><br/>

          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' render={ props=> this.state.admin ? <About {...props} /> : <Redirect to='/'/>} />
              <Route path='/work/:work' component={Work}/>{/*变量*/}
              <Redirect from='/old' to='/new'/>
              <Route path='/new' component={New}/>
              <Route path='/404' component={NotFound}/>
              <Redirect from='*' to='/404'/>
              <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
