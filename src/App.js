// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Signup from './Views/Signup';
import NotFouund from './Views/NotFouund';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main style={{ marginTop: "4rem" }} className="page">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/vaccine-signup" component={Signup}></Route>
            <Route component={NotFouund}></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
