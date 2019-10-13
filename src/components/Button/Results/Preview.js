import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { get } from "lodash";

const Preview = () => {
  const form = useSelector(state => state.form);
  const background = get(form, "button.values.background.hex", "white");
  const color = get(form, "button.values.color.hex", "black");

  const Button = styled.button`
    background: ${props => props.background};
    color: ${props => props.color};
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
  `;

  return (
    <div>
      <Button background={background} color={color}>Button</Button>
    </div>
  );
};

export default Preview;
