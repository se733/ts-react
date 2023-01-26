import * as ReactDOMClient from "react-dom/client";

// import App from "./App";
// import { Contador } from './Contador';
// import { Login } from './Login';
// import { Usuarios } from './Usuarios';
import { Formularios } from './Formularios';

const container = document.getElementById("root") as HTMLDivElement;

ReactDOMClient.createRoot(container)
.render(<Formularios />);
