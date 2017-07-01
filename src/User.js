import React from 'react';
import axios from 'axios';
import{ Link } from 'react-router-dom';
class User extends React.Component{
  constructor(){
    super();
    this.state = {
        user:{},
        wait:true
    }
  }
  componentWillMount(){
    axios.get(`https://cnodejs.org/api/v1/user/${this.props.match.params.loginname}`)
    .then( res =>this.setState({user:res.data.data}) )
    .catch( err => alert(err))
  }
  render(){
    let {user} = this.state
    return(
      <div>
        <img src={user.avatar_url} alt='avatar'>
        <h1>积分：{user.score}</h1>
        <h2>发过的文章</h2>
        {
          user.recent_topics.map( item =>
          <Link to={`/topic/${item.id}`} key={item.id}>{item.title}</Link>)
        }
      </div>
    )
  }
}
export default User
