import React, { Component } from 'react'

class Divfooter extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
    this.myClick = this.myClick.bind(this)
  }

  myClick(ev){
    let footer= document.querySelector('.div_footer')
    let children = footer.querySelectorAll('a')
    let target = ev.target
    
    if(target.nodeName.toLowerCase() == 'a'){
      for(let i=0;i<children.length;i++){
        children[i].classList.remove('active')
      }
      target.className = 'active'
      if(target.innerHTML=='All'){
        this.props.myfilter(null)
      }else if(target.innerHTML=='Active'){
        this.props.myfilter(1)
        // console.log(this.props.myfilter)
      }else{
        this.props.myfilter(0)
        // this.props.myfilter('status==0')
        console.log(target)
      }
    }
  }

  render() {
    return (
      <div className="div_footer">

				<label> {this.props.num} item left</label>

				<ul onClick={(ev)=>{this.myClick(ev)}}>
					<li><a className='active'>All</a></li>
					<li><a>Active</a></li>
					<li><a>Complete</a></li>
				</ul>
				
			</div>
    )
  }
}

export default Divfooter