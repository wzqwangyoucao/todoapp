import React, { Component } from 'react'
class Divheader extends Component {
  constructor(props) {
    super(props)
    // state没有，可以不用写
    this.state = {  }
    // 参考 div_middle就可以去掉下面这句，从而整个constructor也不必要。
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev){
    // e.keyCode是个number，所以可使用 ev.keyCode === 13 来判断
    if(ev.keyCode == "13"){
      // 使用const定义变量，注意，实际工作中对代码要求是比较高的，因为要上线和维护嘛
      // 所以现在review我是按照能够上线的标准来进行的，建议加上.eslintrc文件，和eslint来检测代码
    var len = this.props.nums
      // 这里的id可能是有问题的，比如删掉一个中间的，再添加一个，可能id就重复了，需要想想新的方案
    var newid = len > 0 ? len : 0
      // 在react中，一般是不需要操作dom元素的，你可以参考文档看如何比较正规地获得输入的内容
      // 提示： 需要加个state，设置input的value, 以及绑定input的onChange事件, 每次改变时更新state, 然后时就从这个state中拿。
    var value = document.querySelector('#myText').value
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
		  		<input type='text' id="myText"  placeholder="What needs to be done?" onKeyUp={(ev)=>this.handleClick(ev)}></input>
			</div>

      </div>
    )
  }
}

export default Divheader
