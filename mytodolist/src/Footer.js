import React, { Component } from 'react'

class Divfooter extends Component {
  constructor(props){
    super(props)
    this.state = {
      active : 0
    }
  }
  
  myClick(ev,a){
    this.props.changeSele(a)
    this.setState({
      active : a
    })
    if(this.props.sele === 0){
      this.props.myfilter(null)
    }
    else if(this.props.sele === 1){
      this.props.myfilter(1)
    }
    else if(this.props.sele === 2){
      this.props.myfilter(0)
    }
  }

  render() {
    const active = this.state.active
    return (
      <div className="div_footer">

				<label> {this.props.num} item left</label>

				<ul>
					<li onClick={(ev)=>this.myClick(ev,0)}><a className={ 0 === active ? 'active' : '' } >All</a></li>
					<li onClick={(ev)=>this.myClick(ev,1)}><a className={ 1 === active ? 'active' : '' } >Active</a></li>
					<li onClick={(ev)=>this.myClick(ev,2)}><a className={ 2 === active ? 'active' : '' } >Complete</a></li>
				</ul>
				
			</div>
    )
  }
}

export default Divfooter