import React, { Component } from 'react'
class Divheader extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      value:''
     }
  }

  handleClick(ev){
    let val = ev.target.value
    this.setState({
      value : val
    })

    if(ev.keyCode === 13){
    var len = this.props.nums
    var newid = len > 0 ? len : 0
    var value = this.state.value
    if (value !== '') {
      var obj = {
        id: newid,
        name: value,
        status: 0
      }
      document.querySelector('#myText').value = ''
      this.props.addNewTask(obj)
    }
    }
  }

  render() {
    return (
      <div>
        <h1>todos</h1>

        <div className='div_list'>
	  			<i className="iconfont">&#xe62d;</i>
		  		<input type='text' id="myText"  placeholder="What needs to be done?" onKeyUp={(ev)=>{this.handleClick(ev)}}></input>
			</div>

      </div>
    )
  }
}

export default Divheader