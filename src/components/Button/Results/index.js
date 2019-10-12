import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { get } from "lodash";

const ButtonResult = props => {
  const [code, setCode] = useState();
  const form = useSelector(state => state.form);

  useEffect(() => {
    const valueProps = get(form, "button.values.props", "false");

    const values = `
        render() {
            return (
                <div>
                ${valueProps}
                </div>
            );
        }
      `;

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
    </div>
  );
};

export default ButtonResult
