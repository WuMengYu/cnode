import React from 'react';
import { Route,Link } from 'react-router-dom';

const Me = () => <h1>关于我</h1>
const Dijia = () => <h1>关于第嘉</h1>

class About extends React.Component{

  render(){
    console.log(this.props);
    let {match} = this.props
    return(
      <div>
        about页面<br/>
        <Link to={`${match.url}`}>about me</Link>  <br/>{/*默认一打开about页面就显示关于我*/}
        <Link to={`${match.url}/digitalcity`}>about digitalcity</Link>
        <br/>
        <Route exact path={`${match.url}`} component={Me}/><br/>
        <Route path={`${match.url}/digitalcity`} component={Dijia}/>
      </div>
    )
  }
}
export default About
