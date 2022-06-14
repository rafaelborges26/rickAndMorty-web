import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import "./global.css";

export function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
