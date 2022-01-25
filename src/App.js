import { About } from "./components/About";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Link, Route, Switch } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <ul className="nav">
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
