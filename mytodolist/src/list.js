import React from 'react'

// 可以将React的模块名和文件名大小写保持一致，比如 就叫`Footer.js`
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
    // 如果使用Es6的话，就直接使用const或let来定义变量，这里应该用const，而不再使用var
    // 变量名叫item不是很合理，因为是个列表嘛，要名副其实点。可以就叫list
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
    // 这里的求和，尝试使用 Array#reduce方法
    // 同时学一下 Array#map 和 Array#filter的用法
    // 在这个例子中后面马上就会用到了
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
    // 这个求和也尝试使用 Array#reduce方法
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
    // 这里有点问题，直接使用list即可， 空的时候就让它为空好了，后面咱们可以加个localStorage功能把数据存下来
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
