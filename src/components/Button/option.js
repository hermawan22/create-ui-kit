import React from "react";
import { Field, reduxForm } from "redux-form";

let ButtonOption = props => {
  return (
    <>
      <div>
        <label htmlFor="firstName">Props</label>
        <Field name="props" component="input" type="checkbox" />
      </div>
      <div>
        <label htmlFor="lastName">Size</label>
        <Field name="size" component="input" type="checkbox" />
      </div>
      <div>
        <label htmlFor="email">Color</label>
        <Field name="color" component="input" type="checkbox" />
      </div>
    </>
  );
};

ButtonOption = reduxForm({
  // a unique name for the form
  form: "button"
})(ButtonOption);

export default ButtonOption;
