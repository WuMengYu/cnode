import React from 'react';

class Home extends React.Component{
  // componentDidMount(){
  //   alert('3秒后跳转到about页面')
  //   setTimeout( ()=>{
  //     this.props.history.push('/about')
  //   },3000)
  // }
  handleClick(){
    this.props.history.goBack()
  }
  render(){
    console.log('home====',this.props);
    return(
      <div>
        home
        <button onClick={this.handleClick.bind(this)}>返回</button>
      </div>
    )
  }
}
export default Home
