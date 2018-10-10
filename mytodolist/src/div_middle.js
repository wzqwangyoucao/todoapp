import React, { Component } from 'react'
class Divmiddle extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
    this.handleFinished = this.handleFinished.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleFinished() {
    var status = this.props.item.status
    status = (status === 0 ? 1 : 0)
    var obj = {
      id: this.props.item.id,
      name: this.props.item.name,
      status: status
    }
    this.props.finishedChange(obj)
  }

  handleDelete() {
    this.props.totalChange(this.props.item)
  }

  render() {
    const item = this.props.item
    return (
          <div>
              <li key={Math.random()}>
                {
                  item.status==0?<span></span>:<span className="iconfont">&#xe630;</span>
                }
                <span  onClick={this.handleFinished}></span>
                <label key={Math.random()}  htmlFor={item.id}>{item.name}</label>
                <button className="iconfont" onClick={this.handleDelete}>&#xe64d;</button>
              </li>
          </div>
    )
  }
}

export default Divmiddle