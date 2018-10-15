import React, { Component } from 'react'
class Divmiddle extends Component {
  handleFinished() {
    var status = this.props.item.status
    status = (status === false ? true : false)
    var obj = {
      id: this.props.item.id,
      name: this.props.item.name,
      status: status
    }
    this.props.onChangeItemState(obj)
  }

  handleDelete() {
    this.props.onDelItem(this.props.item)
  }

  render() {
    const item = this.props.item
    return (
          <div>
              <li key={Math.random()}>
                {/* {
                  item.status==false?<span></span>:<span className="iconfont">&#xe630;</span>
                } */}
                <span className={item.status==false?'':'active'}  onClick={()=>this.handleFinished()}></span>
                <label key={Math.random()}  htmlFor={item.id}>{item.name}</label>
                <button className="iconfont" onClick={()=>this.handleDelete()}>&#xe64d;</button>
              </li>
          </div>
    )
  }
}

export default Divmiddle