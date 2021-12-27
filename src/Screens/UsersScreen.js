import { UsersStore } from "../Stores/UsersStore";
import { ErrorMessage, Form, Formik, Field, useField } from "formik";
import * as Yup from "yup";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

const UsersScreen = (props) => {
  const [editableUser, setEditableUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setUser = useSetRecoilState(UsersStore);
  const users = useRecoilValue(UsersStore);
  const editHandler = (id) => {
    var editableUser = users[id];
    setEditableUser(editableUser);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    //first delete the old user record
    var filtered = users.filter((user) => {
      return (
        user.fName !== editableUser.fName &&
        user.lName !== editableUser.lName &&
        user.email !== editableUser.email
      );
    });
    //then set it in the recoil state
    setUser([...filtered, editableUser]);
    alert("Updated Successfully");
  };

  const updaterChangeHandler = (e, field) => {
    var toInsert = {};
    toInsert[field] = e.target.value;
    setEditableUser((oldUser) => ({
      ...oldUser,
      ...toInsert,
    }));
  };
  return (
    <div className="row mx-2">
      <div className="col-md-4">
        <CreateUser />
      </div>
      <div className="col-md-4">
        <ViewUser editor={editHandler} />
      </div>
      <div className="col-md-4">
        <form onSubmit={updateHandler}>
          <div className="fomr-group my-2">
            <label>First Name:</label>
            <input
              type="text"
              onChange={(e) => updaterChangeHandler(e, "fName")}
              className="form-control"
              value={editableUser.fName}
            />
          </div>
          <div className="fomr-group my-2">
            <label>Last Name:</label>
            <input
              type="text"
              onChange={(e) => updaterChangeHandler(e, "lName")}
              className="form-control"
              value={editableUser.lName}
            />
          </div>
          <div className="form-group my-2">
            <label>Email:</label>
            <input
              type="text"
              onChange={(e) => updaterChangeHandler(e, "email")}
              className="form-control"
              value={editableUser.email}
            />
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Save Changess
          </button>
        </form>
      </div>
    </div>
  );
};

const ViewUser = (props) => {
  const users = useRecoilValue(UsersStore);
  const setUsers = useSetRecoilState(UsersStore);

  const deleteHandler = (delIndex) => {
    var deleteUser = window.confirm(
      "Do you really want to delete the item no. " + (delIndex + 1)
    );
    if (deleteUser) {
      var filtered = users.filter((user, index) => index !== delIndex);
      setUsers([...filtered]);
      alert("Done");
    }
  };
  const editHandler = (id) => {
    props.editor(id);
  };
  return (
    <div className="container">
      {users.map((user, index) => {
        return (
          <div className="card mb-2" key={index}>
            <div className="card-body">
              <h4 className="card-title">User #{index + 1}</h4>
              <ListGroup color="primary">
                <ListGroupItem variant="warning">
                  First Name: {user.fName}
                </ListGroupItem>
                <ListGroupItem variant="primary">
                  Last Name: {user.lName}
                </ListGroupItem>
                <ListGroupItem variant="success">
                  Email: {user.email}
                </ListGroupItem>
                <ListGroupItem variant="danger">
                  Password: {user.password}
                </ListGroupItem>
                <ListGroupItem variant="secondary">
                  <button
                    className="btn btn-danger mx-2"
                    onClick={(e) => deleteHandler(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={(e) => editHandler(index)}
                  >
                    Edit
                  </button>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CreateUser = (props) => {
  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validation = Yup.object().shape({
    fName: Yup.string().required("The first name is required"),
    lName: Yup.string().required("The last name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Please provide a password")
      .min(6, "Password must me 6 characters or more"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const setUser = useSetRecoilState(UsersStore);
  const users = useRecoilValue(UsersStore);

  const submitHandler = (data, addons) => {
    //console.log(setUser, users);
    setUser((currUsers) => [
      ...currUsers,
      {
        fName: data.fName,
        lName: data.lName,
        email: data.email,
        password: data.password,
      },
    ]);
    addons.resetForm();
    console.log(users);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(data, addons) => submitHandler(data, addons)}
    >
      {(formik) => (
        <Form className="my-2 mx-3">
          <TextField name="fName" label="First Name" type="text" />
          <TextField name="lName" label="Last Name" type="text" />
          <TextField name="email" label="Email" type="text" />
          <TextField name="password" label="Password" type="password" />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          />
          <br />
          <button className="btn btn-success" type="submit">
            Save User
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UsersScreen;

const TextField = ({ label, ...props }) => {
  const [field, fieldMeta] = useField(props.name);
  return (
    <div className="form-group mb-3">
      <label>{label}:</label>
      <Field
        {...props}
        className={`form-control ${fieldMeta.error && "is-invalid"}`}
        value={field.value}
        onChange={field.onChange}
      />
      <ErrorMessage
        name={props.name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
