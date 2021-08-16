import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Routes } from "./routes";
import "./App.css";
import { StateProvider } from "./store";

function App() {
  return (
    <StateProvider>
      <Router>
        <div className="App">
          <Nav />
          <Routes />
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
