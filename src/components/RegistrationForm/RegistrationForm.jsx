import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { register } from "../../redux/auth/operations";
import style from "../RegistrationForm/RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const labelID = useId();
  const handleSubmitForm = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmitForm}
    >
      <Form autocomlete="off" className={style.registerForm}>
        <h1 className={style.titleForm}>Register Form</h1>
        <div className={style.group}>
          <Field
            className={style.fieldForm}
            type="text"
            name="name"
            id={`${labelID}-name`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-name`} className={style.labelForm}>
            User Name
          </label>
        </div>
        <div className={style.group}>
          <Field
            className={style.fieldForm}
            type="email"
            name="email"
            id={`${labelID}-email`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-email`} className={style.labelForm}>
            Email
          </label>
        </div>
        <div className={style.group}>
          <Field
            className={style.fieldForm}
            type="password"
            name="password"
            id={`${labelID}-password`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-password`} className={style.labelForm}>
            Password
          </label>
        </div>
        <button className={style.buttonForm} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
