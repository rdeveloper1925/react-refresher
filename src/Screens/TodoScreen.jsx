import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  FormGroup,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoStoreState } from "../Stores/TodoStore";

const TodoScreen = () => {
  return (
    <Row className="m-3">
      <Col md="6" xs="12" style={styles.container}>
        <h3>Create Todo</h3>
        <InputForm />
      </Col>
      <Col md="6" xs="12" style={styles.container}>
        <h3>Update Todo</h3>
      </Col>
      <Container md="6" xs="12" style={styles.container}>
        <h3>All My Todos</h3>
        <TableComponent />
      </Container>
    </Row>
  );
};

const styles = {
  container: {
    boxShadow: "3px 3px 3px #A3AAAF",
    borderRadius: "10px",
    marginBottom: "17px",
    padding: "10px",
  },
};

const InputForm = (props) => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const setTodos = useSetRecoilState(todoStoreState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let field = {
      id: getId(),
      task: task,
      dueDate: dueDate,
    };
    //save in the general store
    setTodos((oldtodos) => [...oldtodos, field]);
    setTask("");
    setDueDate("");
    alert("Todo Item saved successfully");
  };

  function getId() {
    return new Date().getTime().toString().slice(-6);
  }

  return (
    <Container>
      <FormGroup>
        <label>Task: </label>
        <FormControl
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <label>Due Date: </label>
        <FormControl
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </FormGroup>
      <br />
      <Button type="button" onClick={onSubmitHandler} variant="success">
        Save Todo!
      </Button>
    </Container>
  );
};

const TableComponent = (props) => {
  const todosList = useRecoilValue(todoStoreState);
  const setTodos = useSetRecoilState(todoStoreState);

  const onView = (id) => {
    var todo = todosList.filter((todo) => todo.id === id);
    todo = todo[0];
    alert(
      `You have a task of ${todo.task} that must be completed by ${todo.dueDate}`
    );
    return;
  };

  const onDelete = (id) => {
    var todo = todosList.filter((todo) => todo.id === id);
    todo = todo[0];
    var index = todosList.indexOf(todo);
    console.log(index);
    //now remove the item
    setTodos((old) => [
      ...old.slice(0, index),
      ...old.slice(index + 1), //because state is immutable
    ]);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>Id</td>
          <td>Task Name</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {todosList.map((todo) => (
          <TableRowComponent todo={todo} onView={onView} onDelete={onDelete} />
        ))}
      </tbody>
    </Table>
  );
};

const TableRowComponent = (props) => (
  <tr>
    <td>{props.todo.id}</td>
    <td>{props.todo.task}</td>
    <td>{props.todo.dueDate}</td>
    <td>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button
            variant="primary"
            onClick={(e) => props.onView(props.todo.id)}
          >
            View
          </Button>
          <Button
            variant="danger"
            onClick={(e) => props.onDelete(props.todo.id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </td>
  </tr>
);

export default TodoScreen;
