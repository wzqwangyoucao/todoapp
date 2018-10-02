import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const FormItem = Form.Item;
        return (
            <div>
                <FormItem label="List"></FormItem>
            </div>
        );
    }
}

export default List;