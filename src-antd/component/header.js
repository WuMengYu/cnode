import React from 'react';

import antd from 'antd';
import Carousel from 'antd/lib/carousel';
class Header extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){

    return(
      <div>
          <div className='head'>
            <a>北京<img src={require('../images/u477.png')}/></a>
            <a className='a'><img src={require('../images/u474.png')}/></a>
          </div>

            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
      </div>
    )
  }
}
export default  Header
