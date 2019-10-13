import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { get } from "lodash";
import Preview from "./Preview";
import renderValue from './Value';

const ButtonResult = props => {
  const [code, setCode] = useState();
  const form = useSelector(state => state.form);

  useEffect(() => {
    const values = renderValue(form);

    setCode(values);
  }, [form]);

  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        startingLineNumber
      >
        {code}
      </SyntaxHighlighter>
      <Preview />
    </div>
  );
};

export default ButtonResult;
