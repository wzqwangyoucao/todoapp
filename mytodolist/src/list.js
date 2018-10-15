import React from 'react'

import Divfooter from './Footer'
import Divmiddle from './Middle'
import Divheader from './Header'

class Mylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			list:[
				{
					id:0,
					name:'吃饭饭',
					status:false
				},{
					id:1,
					name:'看书书',
					status:false
				},{
					id:2,
					name:'睡觉觉',
					status:false
				}
			],
			finished:0,
			mylist:[],
			sele:0
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
		// let arr = this.state.list
		// let sum = 0
		// arr.reduce(function(prev, cur, index, arr) {
		// 	console.log(prev,cur)
		// 	return prev
		//我明白prev是第一个数或者是上一个返回的数   curr是当前的数  但是我返回的上一个数是prev  这样就可以一直循环啊   不明白
		// })

		let sum = 0
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
		const obj = [], sum = 0
		this.state.list.forEach((list) => {
			if (list.id !== todoItem.id) {
				obj.push(list)
				if (list.status === 1) {
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
		let myownlist = this.state.list.filter(item => item.status==a)
		this.setState({
			mylist:myownlist
		})
	}

	
	/**
	 *改变sele
	*/
	changeSele(a){
		this.setState({
			sele:a
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
											onChangeItemState={this.updateFinished.bind(this)} 
											onDelItem={this.updateTotal.bind(this)}
											key={index}
											></Divmiddle>)
										})}
									</ul>
								</div>

							{/*底部组件 */}
							<Divfooter sele={this.state.sele} changeSele={this.changeSele.bind(this)} num={this.state.list.length-this.state.finished} myfilter={this.myfilter.bind(this)}/>
          </div>
      )
  }
}

export default Mylist