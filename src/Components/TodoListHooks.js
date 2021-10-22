import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  FormGroup,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
function TodoListHooks() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const addlist = () => {
    setItemList([
      ...itemList,
      {
        id: itemList.length + 1,
        text: item,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    addlist();
    setItem("");
  };

  const deleteTask = (itemListId) => {
    const updatedList = itemList.filter((item) => item.id !== itemListId);
    setItemList(updatedList);
    console.log(itemList);
  };

  return (
    <div className="container">
      <div className="row row-content mt-0 ">
        <div className="col-12 col-md-6">
          <Card className="card-size" color="dark">
            <CardBody>
              <CardTitle className="cardtitle">
                <div className="row">
                  <div className="col-12">
                    <h3>Add Items to your to-do list!</h3>
                  </div>
                  <div className="col-12">
                    <Form onSubmit={handleSubmit}>
                      <FormGroup row>
                        <Col>
                          <Input
                            type="text"
                            value={item}
                            placeholder="Add Task"
                            onChange={(e) => setItem(e.target.value)}
                          />
                        </Col>
                        <Button
                          type="submit"
                          color="primary"
                          className="btn-md"
                          md={2}
                        >
                          Add Item
                        </Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </CardTitle>
              <CardText>
                <ul>
                  {itemList.map((items) => (
                    <li key={items.id}>
                      <div className="row">
                        <div className="col-10 text">{items.text}</div>
                        <Button
                          className="btn-sm deletebutton"
                          onClick={() => deleteTask(items.id)}
                        >
                          x
                        </Button>
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
  );
}

export default TodoListHooks;
