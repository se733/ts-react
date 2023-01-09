import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;

ReactDOMClient.createRoot(container)
.render(<App />);
