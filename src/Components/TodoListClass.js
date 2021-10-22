import React, {Component} from 'react';
import {Button,Form,Input, FormGroup,Col,Card,CardBody, CardTitle, CardText} from 'reactstrap'

class TodoListClass extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         item:"",
         itemList:[]
      };    

      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.deleteTask=this.deleteTask.bind(this)

    };
    
    handleChange=e=>{
        this.setState({
            item:e.target.value
        })
    }   

    deleteTask=(itemListId)=>{  
        const updatedList = this.state.itemList.filter(item=>itemListId!==item.key);
        this.setState({ 
            itemList:([updatedList])   
        })
        console.log(updatedList);
    }
    
    handleSubmit=e=>{
        e.preventDefault();
        if(this.state.item==="") return;
        this.setState({
            itemList:([
                ...this.state.itemList,{
                    text:this.state.item,
                    key:Date.now()
                }
            ]),
            item:""
        })
    }
    render(){
        return(
            <div className= "container">
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <Card className="card-size" color="danger">
                            <CardBody>
                                <CardTitle className="cardtitle">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3>Add Items to your to-do list!</h3>
                                        </div>
                                        <div  className="col-12">
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup row>
                                                <Col>
                                                    <Input type="text" placeholder="Add Task" value={this.state.item} onChange={this.handleChange}/>
                                                </Col>
                                                <Button type="submit" color="primary" className="btn-md" md={2}>Add Item</Button>
                                            </FormGroup>
                                        </Form>
                                        </div>
                                    </div>
                                </CardTitle>
                                <CardText>
                                        <ul>
                                            {this.state.itemList.map(items=>(
                                            <li key={items.key}>
                                                <div className="row">   
                                                    <div className="col-10 text">
                                                        {items.text}
                                                    </div>
                                                    <Button className="btn-sm deletebutton" onClick={()=>this.deleteTask(items.key)}>x</Button>
                                                </div>
                                            </li>
                                            ))}  
                                        </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
    }

export default TodoListClass;