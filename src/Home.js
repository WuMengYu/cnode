import React from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import{ Link } from 'react-router-dom';


class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[],
      tab:'',
      tabs:['','good','share','ask','job'],
      page:1
    }
  }
  loadData(tab='',page=1){
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}`)
    .then( res =>this.setState({data:res.data.data}) )

  }
  componentWillMount(){
    this.loadData(this.state.tab)
  }
  handleClick(tab){
    this.setState({tab})
    this.loadData(tab)
  }
  selectPage(page){
    this.setState({page})
    this.loadData(this.state.tab,page)

  }
  render(){
    console.log(this.state.data);
    let obj ={
      share:'分享',
      ask:'问答',
      job:'招聘',
      good:'精华'
    }
    let btns = [];
    for(let i = 0; i < 5; i++) {
      let nowPage = this.state.page<3 ? i+1 : this.state.page-2+i
      btns.push(
        <button key={nowPage} style={{background:this.state.page===nowPage ? 'blue' :'lightseagreen'}}
          onClick={this.selectPage.bind(this,nowPage)}>{nowPage}</button>

      )
    }
    return(
      <div>
        {
          this.state.tabs.map( (item,index)=>
            <button key={index}
              onClick={this.handleClick.bind(this,item)}
              style={{background:this.state.tab===item?'blue':'lightseagreen'}}>
              {!item ? '全部' :
              obj[item] }</button>
          )
        }
        {

          this.state.data.map(item =>
            <div key={item.id}>
              <img src={item.author.avatar_url} alt={'avatar'} style={{width:'30px',height:'30px'}}/>
              <span style={{marginLeft:'10px'}}>{item.reply_count}/{item.visit_count}</span>
              {/*{item.top?<button>置顶</button>:
              <button>{obj[item.tab]}</button>}*/}
              <button>{item.top ? '置顶' : item.good ? '精华' :obj[item.tab]}</button>

              <Link to={`/topic/${item.id}`}>
                <span style={{marginLeft:'10px'}}>{item.title}</span>
              </Link>
              <span style={{float:'right'}}>{moment(item.create_at.slice(0,10)).fromNow()}</span>
            </div>
          )
        }

        {btns}
      </div>
    )
  }
}
export default Home
