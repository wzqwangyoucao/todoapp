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
            {/* 这里哪怕删除div也不能让li直接再ul中 */}
              <li key={Math.random()}>
                <span className={item.status==false?'':'active'}  onClick={()=>this.handleFinished()}></span>
                {/* 这里我想过用input然后关联label   但是感觉实现会有问题  最开始试过  input的checkbox不能改变样式  
                    
                    或者是input状态改变   使其透明度为0   改变背景?
                */}
                <label key={Math.random()}  htmlFor={item.id}>{item.name}</label>
                <button className="iconfont" onClick={()=>this.handleDelete()}>&#xe64d;</button>
              </li>
          </div>
    )
  }
}

export default Divmiddle