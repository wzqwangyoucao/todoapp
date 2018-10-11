import React, { Component } from 'react'
class Divmiddle extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
    // 下面这两个可以不用bind， 直接使用array function即可，我写个示例在下面，你可参考下。
    this.handleFinished = this.handleFinished.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // 这是个示例函数
  onHandleFinished = () => {
    // 这个函数不需要bind也可以直接在下面的模板中使用, 可以保证this的正确。
  }


  handleFinished() {
    // 你有没有觉得这个status的处理有点细节？ 如果只有两个状态，可以直接使用布尔型
    // 比如叫 done, 值为true或者false
    var status = this.props.item.status
    status = (status === 0 ? 1 : 0)
    var obj = {
      id: this.props.item.id,
      name: this.props.item.name,
      status: status
    }
    // 事件函数将约定可命名为 onXXXX, 比如onItemChange
    this.props.finishedChange(obj)
  }

  handleDelete() {
    this.props.totalChange(this.props.item)
  }

  render() {
    const item = this.props.item
    return (
        <div>
        {/* html结构不正确, li的父级一定要是ul, 你可以直接把外层div去掉 */}
        {/*这里使用random作为key不合理，会造成添加时，其实是所有li都会重新构造和刷新的，可以使用 id作为key
           建议专门写个示例来搞清楚key的工作原理，并且总结key的使用，这个面试时就会问到，开发时也经常会碰到
           这是react的一个重要知识点。
          */}
              <li key={Math.random()}>
                {
                  // icon font 使用unicode编码维护性不是很好，建议使用className类型的iconfont
                  item.status==0?<span></span>:<span className="iconfont">&#xe630;</span>
                }
                <span  onClick={this.handleFinished}></span>
                {/* 这里的key也是有问题， 弄清楚react这个key的作用，这个面试时也会问到的 */}
                <label key={Math.random()}  htmlFor={item.id}>{item.name}</label>
                <button className="iconfont" onClick={this.handleDelete}>&#xe64d;</button>
              </li>
          </div>
    )
  }
}

export default Divmiddle
