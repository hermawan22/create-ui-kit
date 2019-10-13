import React from "react";
import { OptionButton, ResultButton } from "./components/Button";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    options: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/button",
    name: "Button",
    options: () => <OptionButton />,
    main: () => <ResultButton />
  },
];

export default routes;
