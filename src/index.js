import React from "react";
import {render} from "react-dom";
import App from "./App.js";
import "./styles.css";
import { Switch } from "./Switch.js";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
