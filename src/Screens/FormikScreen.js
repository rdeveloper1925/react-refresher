import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { Row } from "react-bootstrap";
import * as Yup from "yup";

const FormikScreen = (props) => {
  //Validation using yup. need to read more on it
  const validation = Yup.object({
    firstName: Yup.string()
      .max(15, "FirstName must have less than 15 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .max(15, "Last Name must have 15 characters or less")
      .required("Last name is required"),
    email: Yup.string().email("Invalid Email"),
    password: Yup.string()
      .min(6, "Password should be more than 6 characters")
      .required("password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords should match"
    ),
  });
  return (
    <Row>
      <h4 className="text-success text-center fw-bold">Formik-Enabled form</h4>
      <div className="m-3 col-md-6">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true); //temporarily disables the submit button
            console.log(values); //handle the submissions by saving into state or whatever
            resetForm(); //clear the values in the form
          }}
        >
          {(
            formik //formik variable has a ton of useful information. check it out
          ) => (
            <>
              <h2>Sign Up</h2>
              <Form>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="text" />
                <TextField label="Password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn btn-success m-3"
                >
                  Submit
                </button>
                <button type="reset" className="btn btn-danger m-3">
                  Reset
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </Row>
  );
};

export default FormikScreen;

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //The text field must be of Field from formik for the error reporting to work well
  //alternatively, you can use meta variable to manually display the error
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
};
