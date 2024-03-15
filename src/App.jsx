import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <Fragment>
        <Header/>
        <Home />
    </Fragment>
  );
}

export default App;
