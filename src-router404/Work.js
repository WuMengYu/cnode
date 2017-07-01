import React from 'react';

class Work extends React.Component{
  render(){
    console.log(this.props)
    return(
        <div>
          work组件<br/>
          {this.props.match.params.work}
        </div>

    )
  }
}
export default Work
