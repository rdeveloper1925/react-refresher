import { Field, Form, Formik, useField, ErrorMessage } from "formik";
import { useReducer, useState } from "react";
import { Container } from "react-bootstrap";
import * as Yup from "yup";
import { DateSchema } from "yup";
import { StudentsStore } from "../Stores/StudentsStore";

const StudentsScreen = (props) => {
  const initialValues = { id: "", name: "", class: "", feesStatus: "" };
  //trying with reducers
  const [students, dispatch] = useReducer(StudentsReducer, initialValues);

  const [student, setStudent] = useState([initialValues]);

  const validation = Yup.object().shape({
    name: Yup.string()
      .max(20, "Name exceeds 20 characters")
      .required("The name is required"),
    class: Yup.string()
      .oneOf(["P1", "P2", "P3", "P4", "P5", "P6", "P7"])
      .required("The class is required"),
    feesStatus: Yup.string()
      .oneOf(["Paid", "Unpaid"])
      .required("The fees status is requred"),
  });

  const submitHandler = (data, addons) => {
    data["id"] = new Date().getTime();
    console.log(data, addons);
    setStudent((oldStudent) => [...oldStudent, data]);
  };
  //Always use validation Schema
  return (
    <StudentsStore.Provider value={student}>
      <Container>
        <div className="col-md-6 p-2">
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(data, addons) => submitHandler(data, addons)}
          >
            {(formik) => {
              return (
                <Form>
                  <TextField label="Name" type="text" name="name" />
                  <TextField
                    label="Class"
                    type="select"
                    name="class"
                    options={["P1", "P2", "P3", "p4", "P5", "P6", "P7"]}
                  />
                  <TextField
                    label="Payment Status"
                    type="select"
                    name="feesStatus"
                    options={["Paid", "Unpaid"]}
                  />
                  <button type="submit" className="btn btn-success btn-md">
                    Submit!
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Container>
    </StudentsStore.Provider>
  );
};

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  switch (props.type) {
    case "text":
      return (
        <div className="mb-2 form-group">
          <label htmlFor={field.name}>{label}:</label>
          <Field
            onChange={field.onChange}
            className={`form-control ${meta.error && "is-invalid"}`}
            {...props}
          />
          <ErrorMessage
            name={field.name}
            render={(msg) => <small className="text-danger">{msg}</small>}
          />
        </div>
      );
      break;

    case "select":
      return (
        <div className="mb-2 form-group">
          <label htmlFor={field.name}>{label}:</label>
          <select
            onChange={field.onChange}
            className={`form-control ${meta.error && "is-invalid"}`}
            name={field.name}
            value={field.value}
          >
            <option>Select An Option</option>
            {props.options.map((option) => (
              <option>{option}</option>
            ))}
          </select>
          <ErrorMessage
            name={field.name}
            render={(msg) => <small className="text-danger">{msg}</small>}
          />
        </div>
      );
      break;

    default:
      return "Field not configured: " + props.type;
      break;
  }
};

//reducer function
const StudentsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [
        ...state,
        {
          id: action.text,
          name: action.name,
          feesStatus: action.feesStatus,
          class: action.class,
        },
      ];
      break;

    case "REMOVE_STUDENT":
      return state.filter((student) => student.id !== action.id);
      break;

    default:
      return state;
      break;
  }
};

export default StudentsScreen;
