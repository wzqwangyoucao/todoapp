import React from 'react';
import { List } from 'antd';
import { Form, Icon, Input, Button } from 'antd';

    


class Mylist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             data:[
            '吃饭饭',
            '打豆豆',
            '看书书',
            '睡觉觉'
          ]
         };
         this.delist=this.delist.bind(this)
         this.addlist = this.addlist.bind(this)
    }
    delist(item) {
        this.setState(
            this.state.data.splice(this.state.data.indexOf(item),1)
        )
    }
    addlist(){
        console.log(!this.state.data[this.state.data.length-1]==this.state.last)
        if(this.state.data[this.state.data.length-1]!=this.state.last){
            this.setState(
                {
                    data:[...this.state.data,this.state.last]
                }
            )
        }
        else{
            this.setState(
                {
                    data:[...this.state.data]
                }
            )
        }
        

    }
    render() {
        return (
            <div>
                <Input className='todilist' placeholder="Basic usage" onChange={(v)=>{if(!(this.state.data.indexOf(v.target.value)>-1&&v.target.value =='')){this.setState({...this.state,last:v.target.value})}}}/>
                <Button type="primary" onClick={()=>this.addlist()}>
                    增加
                </Button>
                <List
                    className='todilist'
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => (<List.Item actions={[<a onClick={()=>this.delist(item)}>×</a>]}>{item}</List.Item>)}
                />

            </div>
        );
    }
}

export default Mylist;