import React from 'react';
import axios from 'axios';
class Topic extends React.Component{
  constructor(){
    super();
    this.state = {
      data:{}
    }
  }
  componentWillMount(){
    let id = this.props.match.params.id
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
    .then( res => this.setState({data:res.data.data}))
    .catch( err => console.log(err) )
  }
  render(){
    console.log(this.props);
    console.log(this.state.data);
    console.log( res => this.setState({data:res.data.data}));
    return(
      <div>
         {/*{this.state.data.content}*/}
         <div dangerouslySetInnerHTML={{__html:this.state.data.content}} />
      </div>
    )
  }
}
export default Topic
