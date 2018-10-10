import React from 'react'

import Divfooter from './div_footer'
import Divmiddle from './div_middle'
import Divheader from './div_header'

class Mylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			list:[
				{
					id:0,
					name:'吃饭饭',
					status:0
				},{
					id:1,
					name:'看书书',
					status:0
				},{
					id:2,
					name:'睡觉觉',
					status:0
				}
			],
			finished:0,
			mylist:[]
		}
	}
	/**
	 * 增加数据
	 */
  addTask(obj){
		var item = this.state.list
		item.push(obj)
		this.setState({
			list:item
		})
	}

	/**
	 * 更新数据状态
	 */
	updateFinished(todoItem) {
		var sum = 0
		this.state.list.forEach((item) => {
			if (item.id === todoItem.id) {
				item.status = todoItem.status
			}
			if (item.status === 1) {
				sum++
			}
		})
		this.setState({
			finished: sum
		})
	}
	
	/**
	 * 删除数据 
	 */
	updateTotal(todoItem) {
		var obj = [], sum = 0
		this.state.list.forEach((item) => {
			if (item.id !== todoItem.id) {
				obj.push(item)
				if (item.status === 1) {
					sum++
				}
			}
		})
		this.setState({
			list: obj,
			finished: sum
		})
	}

	/**
	 * 过滤数据
	 */
	myfilter(a){
		console.log(a)
		let myownlist = this.state.list.filter(item => item.status==a)
		console.log(myownlist)
		this.setState({
			mylist:myownlist
		})
	}

  render() {
		let items = this.state.mylist.length==0?this.state.list:this.state.mylist
      return (
          <div>
							{/* 头部组件 */}
              <Divheader addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>

							{/* 中间组件 */}
      					<div className='div_listitem'>
									<ul>
										{items.map((item,index)=>{
											return (<Divmiddle 
											item={item}  
											finishedChange={this.updateFinished.bind(this)} 
											totalChange={this.updateTotal.bind(this)}
											key={index}
											></Divmiddle>)
										})}
									</ul>
								</div>

							{/*底部组件 */}
							<Divfooter num={this.state.list.length-this.state.finished} myfilter={this.myfilter.bind(this)}/>
          </div>
      )
  }
}

export default Mylist