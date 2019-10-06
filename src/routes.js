import React from "react";
import { OptionButton, ResultButton } from "./components/Button";

const routes = [
  {
    path: "/",
    exact: true,
    options: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/about",
    options: () => <OptionButton />,
    main: () => <ResultButton />
  },
  {
    path: "/wew",
    options: () =>  <div>wew</div>,
    main: () => <div>hahaha</div>
  }
];

export default routes;
