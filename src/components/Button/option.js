import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { get } from "lodash";
import { CompactPicker } from "react-color";

const Picker = props => {
  const {
    input: { onChange }
  } = props;

  return <CompactPicker onChange={color => onChange(color)} />;
};

let ButtonOption = () => {
  const form = useSelector(state => state.form);
  const color = get(form, "button.values.color", false);

  return (
    <>
      {/* <div>
        <label htmlFor="size">Size</label>
        <Field name="size" component="input" type="checkbox" />
      </div> */}
      <div>
        <label htmlFor="color">Color</label>
        <Field name="color" component="input" type="checkbox" />
        {color && <Field name="background" component={Picker} />}
        {color && <Field name="color" component={Picker} />}
      </div>
    </>
  );
};

ButtonOption = reduxForm({
  // a unique name for the form
  form: "button"
})(ButtonOption);

export default ButtonOption;
