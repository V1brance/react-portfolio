import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Page imports

import Header from "./components/Header";
import Footer from "./components/Footer";

import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import About from "./pages/aboutMe";
import Project from "./pages/project";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
